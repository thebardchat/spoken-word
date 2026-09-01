/**
 * Shared studio voice helpers.
 * Sweet = carina (soft, empathetic). God = lux (calm recording).
 * After TTS, dynamic-range compression so the takes sit forward, not like a machine.
 * Never called from the browser. Never TTS on page load.
 */
import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";

export const SWEET_VOICE = "carina";
export const GOD_VOICE = "lux";
const FFMPEG = "/usr/local/bin/ffmpeg";

export function audioRoot() {
  return process.env.SANCTUARY_AUDIO_ROOT
    ? path.resolve(process.env.SANCTUARY_AUDIO_ROOT)
    : path.resolve(import.meta.dirname, "..", "public/audio");
}

export function drcLedgerPath() {
  return path.join(audioRoot(), ".drc-ledger.json");
}

export function drcStampPath() {
  return path.join(audioRoot(), ".drc-applied");
}

export function parseVerses(file) {
  const src = fs.readFileSync(file, "utf8");
  const out = [];
  const re =
    /\{\s*id:\s*"([^"]+)",\s*t:\s*"((?:\\.|[^"\\])*)",\s*r:\s*"([^"]*)"([^}]*)\}/g;
  let m;
  while ((m = re.exec(src))) {
    const extra = m[4];
    out.push({
      id: m[1],
      t: m[2].replace(/\\"/g, '"').replace(/\\n/g, "\n"),
      r: m[3],
      q: /q:\s*true/.test(extra),
      fromGod: /fromGod:\s*true/.test(extra),
      audio: extra.match(/audio:\s*"([^"]+)"/)?.[1],
      fresh: /fresh:\s*true/.test(extra),
      sermon: /sermon:\s*true/.test(extra),
    });
  }
  return out;
}

export function emitVerse(v) {
  const parts = [
    `id: ${JSON.stringify(v.id)}`,
    `t: ${JSON.stringify(v.t)}`,
    `r: ${JSON.stringify(v.r)}`,
  ];
  if (v.q) parts.push("q: true");
  if (v.fromGod) parts.push("fromGod: true");
  if (v.sermon) parts.push("sermon: true");
  if (v.audio) parts.push(`audio: ${JSON.stringify(v.audio)}`);
  if (v.fresh) parts.push("fresh: true");
  return `  { ${parts.join(", ")} }`;
}

export function kindOf(v) {
  if (v.fromGod) return "god";
  if (v.sermon) return "sermon";
  if (v.q) return "quote";
  return "sweet";
}

export function audioPathFor(v) {
  if (v.fromGod) {
    const stem = v.id.replace(/-\d+$/, "");
    return `/audio/god/${stem}.mp3`;
  }
  if (v.sermon) return `/audio/sermon/${v.id}.mp3`;
  if (v.q) return `/audio/sweet/${v.id}.mp3`;
  const stem = v.id.replace(/-\d+$/, "");
  return `/audio/sweet/${stem}.mp3`;
}

export function enhanceText(text, kind) {
  const paused = text
    .replace(/([.!?])\s+/g, "$1 [pause] ")
    .replace(/ — /g, " [pause] ")
    .replace(/; /g, "; [pause] ")
    .trim();
  if (kind === "god") {
    return `<slow><lower-pitch><soft>[breath] ${paused}</soft></lower-pitch></slow>`;
  }
  if (kind === "sermon") {
    return `<slow>${paused}</slow>`;
  }
  return `<soft><slow>${paused}</slow></soft>`;
}

export function voiceIdFor(kind) {
  return kind === "god" ? GOD_VOICE : SWEET_VOICE;
}

export function speedFor(kind) {
  if (kind === "god") return 0.8;
  if (kind === "sermon") return 0.88;
  return 0.86;
}

/** Sweet sits forward. God is more squashed, like a recording. */
export function compressorFilter(kind) {
  if (kind === "god") {
    return "acompressor=threshold=0.112:ratio=4:attack=8:release=90:makeup=2.6:knee=2.2:detection=rms,alimiter=limit=0.75:level=false:attack=7:release=80";
  }
  return "acompressor=threshold=0.125:ratio=2.8:attack=12:release=110:makeup=2.4:knee=2.5:detection=rms,alimiter=limit=0.75:level=false:attack=7:release=80";
}

export function drcKind(kind) {
  return kind === "god" ? "god" : "sweet";
}

export function audioRel(absPath) {
  return path.relative(audioRoot(), absPath).replaceAll("\\", "/");
}

let ledgerMemo = null;
let ledgerMemoRoot = null;

export function clearDrcLedgerMemo() {
  ledgerMemo = null;
  ledgerMemoRoot = null;
}

export function loadDrcLedger({ reload = false } = {}) {
  const root = audioRoot();
  if (ledgerMemo && ledgerMemoRoot === root && !reload) return ledgerMemo;
  const file = path.join(root, ".drc-ledger.json");
  let data = { version: 1, files: {} };
  if (fs.existsSync(file)) {
    try {
      const parsed = JSON.parse(fs.readFileSync(file, "utf8"));
      if (parsed && typeof parsed.files === "object" && parsed.files) {
        data = { version: 1, files: parsed.files };
      }
    } catch {
      data = { version: 1, files: {} };
    }
  }
  ledgerMemo = data;
  ledgerMemoRoot = root;
  return data;
}

export function saveDrcLedger(ledger = ledgerMemo) {
  if (!ledger) return;
  const root = audioRoot();
  fs.mkdirSync(root, { recursive: true });
  ledgerMemo = ledger;
  ledgerMemoRoot = root;
  fs.writeFileSync(path.join(root, ".drc-ledger.json"), `${JSON.stringify(ledger, null, 2)}\n`);
}

export function isDrcCurrent(absPath, kind, ledger = loadDrcLedger()) {
  if (!fs.existsSync(absPath)) return false;
  const rec = ledger.files[audioRel(absPath)];
  if (!rec) return false;
  const st = fs.statSync(absPath);
  return (
    rec.size === st.size &&
    rec.mtime === Math.round(st.mtimeMs) &&
    rec.filter === compressorFilter(drcKind(kind))
  );
}

export function markDrc(absPath, kind, ledger = loadDrcLedger()) {
  const st = fs.statSync(absPath);
  ledger.files[audioRel(absPath)] = {
    size: st.size,
    mtime: Math.round(st.mtimeMs),
    kind: drcKind(kind),
    filter: compressorFilter(drcKind(kind)),
    at: new Date().toISOString(),
  };
  return ledger;
}

/**
 * One-time migration from the old global stamp.
 * Only runs when the ledger is empty. Files newer than the stamp are left
 * unmarked so the daily catch-up will compress them once.
 */
export function seedDrcFromStamp(jobs, ledger = loadDrcLedger()) {
  const stampFile = drcStampPath();
  if (!fs.existsSync(stampFile)) return 0;
  if (Object.keys(ledger.files).length > 0) return 0;
  const stampAt = Date.parse(fs.readFileSync(stampFile, "utf8").split("\n")[0]) || 0;
  let seeded = 0;
  for (const { kind, file } of jobs) {
    if (!fs.existsSync(file)) continue;
    const st = fs.statSync(file);
    if (st.size < 2000) continue;
    if (stampAt && st.mtimeMs > stampAt + 5000) continue;
    markDrc(file, kind, ledger);
    seeded += 1;
  }
  return seeded;
}

export function listStudioAudio() {
  const root = audioRoot();
  const dirs = {
    sweet: path.join(root, "sweet"),
    god: path.join(root, "god"),
    sermon: path.join(root, "sermon"),
  };
  const jobs = [];
  for (const [kind, dir] of Object.entries(dirs)) {
    if (!fs.existsSync(dir)) continue;
    for (const name of fs.readdirSync(dir)) {
      if (!name.endsWith(".mp3") || name.includes(".drc-tmp.")) continue;
      jobs.push({ kind: drcKind(kind), file: path.join(dir, name) });
    }
  }
  return jobs;
}

export function masterMp3(src, dest, kind) {
  const tmp = `${dest}.drc-tmp.mp3`;
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(FFMPEG)) {
      resolve({ skipped: true, reason: "no-ffmpeg" });
      return;
    }
    const child = spawn(
      FFMPEG,
      [
        "-y",
        "-i",
        src,
        "-af",
        compressorFilter(kind),
        "-c:a",
        "libmp3lame",
        "-b:a",
        "192k",
        "-ar",
        "44100",
        "-ac",
        "1",
        tmp,
      ],
      { stdio: ["ignore", "ignore", "pipe"] },
    );
    let err = "";
    child.stderr.on("data", (d) => {
      err += d.toString();
    });
    child.on("error", reject);
    child.on("close", (code) => {
      if (code !== 0) {
        try {
          fs.unlinkSync(tmp);
        } catch {
          /* */
        }
        reject(new Error(err.slice(-240) || `ffmpeg ${code}`));
        return;
      }
      fs.renameSync(tmp, dest);
      resolve({ mastered: true });
    });
  });
}

export async function tts(text, kind, key) {
  const res = await fetch("https://api.x.ai/v1/tts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      text,
      voice_id: voiceIdFor(kind),
      language: "en",
      speed: speedFor(kind),
      output_format: {
        codec: "mp3",
        sample_rate: 44100,
        bit_rate: 192000,
      },
    }),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`TTS ${res.status} ${body.slice(0, 200)}`);
  }
  return Buffer.from(await res.arrayBuffer());
}

export async function voiceToFile(v, dest, key, { force = false } = {}) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  if (!force && fs.existsSync(dest) && fs.statSync(dest).size > 2000) {
    return { skipped: true };
  }
  const kind = kindOf(v);
  const spoken = enhanceText(v.t, kind);
  const buf = await tts(spoken, kind, key);
  fs.writeFileSync(dest, buf);
  const mastered = await masterMp3(dest, dest, kind);
  if (!mastered?.skipped) {
    const ledger = loadDrcLedger();
    markDrc(dest, kind, ledger);
    saveDrcLedger(ledger);
  }
  return { made: true, bytes: fs.statSync(dest).size, kind, voice: voiceIdFor(kind) };
}

export async function mapPool(items, n, fn) {
  const out = new Array(items.length);
  let i = 0;
  async function worker() {
    while (i < items.length) {
      const idx = i++;
      out[idx] = await fn(items[idx], idx);
    }
  }
  await Promise.all(Array.from({ length: n }, worker));
  return out;
}
