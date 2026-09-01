#!/usr/bin/env node
/**
 * Nightly scripture operator.
 * - Appends ten unique verses from the queue to the catalog well.
 * - Voices the next unlock batch (sweet = carina, God = lux).
 * - Catches up DRC on any unmarked takes (per-file ledger, never double-compress).
 * - Idempotent for the America/New_York calendar day.
 * Never called from the browser. Never TTS on page load.
 */
import fs from "node:fs";
import path from "node:path";
import { runCompress } from "./compress-audio.mjs";
import {
  audioPathFor,
  emitVerse,
  kindOf,
  parseVerses,
  voiceIdFor,
  voiceToFile,
} from "./studio.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const CATALOG_FILE = path.join(ROOT, "src/data/verses-catalog.ts");
const START_FILE = path.join(ROOT, "src/data/verses-start.ts");
const QUEUE_FILE = path.join(ROOT, "src/data/nightly-queue.json");
const LOG_FILE = path.join(ROOT, "src/data/nights-log.json");
const NIGHTLY_COUNT = 10;
const VOICE_AHEAD = 10;
const KEY = process.env.XAI_API_KEY;

function todayKeyNY(d = new Date()) {
  return d.toLocaleDateString("en-CA", { timeZone: "America/New_York" });
}

function slugRef(ref) {
  return ref
    .toLowerCase()
    .replace(/[–—]/g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function normRef(ref) {
  return ref
    .toLowerCase()
    .replace(/[–—]/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

function writeCatalog(verses) {
  const body = verses.map(emitVerse).join(",\n");
  const src = `import type { Verse } from "./types";

/** Nightly unlock treasury — ten passages at midnight. */
export const CATALOG_VERSES: Verse[] = [
${body},
];
`;
  fs.writeFileSync(CATALOG_FILE, src);
}

async function voiceVerse(v) {
  if (!v.audio) return { skipped: true };
  const dest = path.join(ROOT, "public", v.audio.replace(/^\//, ""));
  if (!KEY) return { skipped: true, reason: "no-key" };
  const kind = kindOf(v);
  process.stdout.write(`${kind.toUpperCase().padEnd(6)} ${v.r} (${voiceIdFor(kind)})… `);
  try {
    const result = await voiceToFile(v, dest, KEY, { force: false });
    if (result.skipped) {
      console.log("skip");
      return { skipped: true };
    }
    console.log(`${result.bytes} bytes`);
    return { made: true, bytes: result.bytes };
  } catch (err) {
    console.log("FAIL", err.message);
    return { failed: true, error: err.message };
  }
}

function loadJson(file, fallback) {
  if (!fs.existsSync(file)) return fallback;
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

const today = todayKeyNY();
const log = loadJson(LOG_FILE, { timezone: "America/New_York", lastRun: null, runs: [] });
const queue = loadJson(QUEUE_FILE, []);
const start = parseVerses(START_FILE);
let catalog = parseVerses(CATALOG_FILE);

const held = new Set([...start, ...catalog].map((v) => normRef(v.r)));

const already = log.lastRun === today;
let added = [];

if (!already) {
  const nextId =
    catalog.reduce((max, v) => {
      const n = Number(v.id.split("-").pop());
      return Number.isFinite(n) ? Math.max(max, n) : max;
    }, 1219) + 1;

  const remain = [];
  let seq = nextId;
  for (const item of queue) {
    if (added.length >= NIGHTLY_COUNT) {
      remain.push(item);
      continue;
    }
    if (held.has(normRef(item.r))) {
      console.log(`skip duplicate ${item.r}`);
      continue;
    }
    const id = `${slugRef(item.r)}-${seq}`;
    const verse = {
      id,
      t: item.t,
      r: item.r,
      fromGod: Boolean(item.fromGod),
      audio: audioPathFor({
        id,
        t: item.t,
        r: item.r,
        fromGod: Boolean(item.fromGod),
      }),
    };
    catalog.push(verse);
    added.push(verse);
    held.add(normRef(item.r));
    seq += 1;
  }
  fs.writeFileSync(QUEUE_FILE, `${JSON.stringify(remain, null, 2)}\n`);
} else {
  console.log(`already ran ${today} — skipping append`);
}

const needVoice = [];
const seen = new Set();
for (const v of catalog) {
  const guess = v.audio || audioPathFor(v);
  const dest = path.join(ROOT, "public", guess.replace(/^\//, ""));
  const ready = fs.existsSync(dest) && fs.statSync(dest).size > 2000;
  if (ready) {
    v.audio = guess;
    continue;
  }
  if (needVoice.length < VOICE_AHEAD) {
    v.audio = guess;
    needVoice.push(v);
    seen.add(v.id);
  }
}
for (const v of added) {
  if (!seen.has(v.id)) {
    needVoice.push(v);
    seen.add(v.id);
  }
}

writeCatalog(catalog);

let made = 0;
let failed = 0;
let skipped = 0;
for (const v of needVoice) {
  const result = await voiceVerse(v);
  if (result.made) made += 1;
  else if (result.failed) failed += 1;
  else skipped += 1;
}

console.log("drc catch-up");
const drc = await runCompress({ force: false });

if (!already) {
  log.lastRun = today;
  log.runs = [
    {
      date: today,
      added: added.length,
      voiced: made,
      failed,
      compressed: drc.made,
      compressedSkip: drc.skipped,
      refs: added.map((v) => v.r),
    },
    ...(Array.isArray(log.runs) ? log.runs : []),
  ].slice(0, 60);
  fs.writeFileSync(LOG_FILE, `${JSON.stringify(log, null, 2)}\n`);
} else if (drc.made || drc.seeded) {
  const head = Array.isArray(log.runs) && log.runs[0] && log.runs[0].date === today ? log.runs[0] : null;
  if (head) {
    head.compressed = drc.made;
    head.compressedSkip = drc.skipped;
    fs.writeFileSync(LOG_FILE, `${JSON.stringify(log, null, 2)}\n`);
  }
}

const queueLeft = loadJson(QUEUE_FILE, []).length;
console.log(
  JSON.stringify(
    {
      date: today,
      already,
      added: added.map((v) => v.r),
      voiced: made,
      skipped,
      failed,
      compressed: drc.made,
      compressedSkip: drc.skipped,
      ledger: drc.ledger,
      catalog: catalog.length,
      queueLeft,
    },
    null,
    2,
  ),
);
if (failed || drc.failed) process.exitCode = 1;
