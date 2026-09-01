#!/usr/bin/env node
/**
 * Studio takes for the sanctuary.
 * Sweet = carina (soft). God = lux (a recording).
 * Regenerates existing files so the old computer-like takes are replaced.
 * Never called from the browser. Never TTS on page load.
 */
import fs from "node:fs";
import path from "node:path";
import {
  audioPathFor,
  emitVerse,
  kindOf,
  mapPool,
  parseVerses,
  voiceIdFor,
  voiceToFile,
} from "./studio.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const START_FILE = path.join(ROOT, "src/data/verses-start.ts");
const CATALOG_FILE = path.join(ROOT, "src/data/verses-catalog.ts");
const SERMON_FILE = path.join(ROOT, "src/data/sermons.ts");
const KEY = process.env.XAI_API_KEY;
const FORCE = process.argv.includes("--force");
const POOL = 3;

if (!KEY) {
  console.error("XAI_API_KEY missing");
  process.exit(1);
}

function writeTs(file, header, exportName, verses) {
  const body = verses.map(emitVerse).join(",\n");
  const src = `import type { Verse } from "./types";

${header}
export const ${exportName}: Verse[] = [
${body},
];
`;
  fs.writeFileSync(file, src);
}

const start = parseVerses(START_FILE);
const catalog = parseVerses(CATALOG_FILE);
const sermons = parseVerses(SERMON_FILE);

let patched = 0;
for (const v of start) {
  if (!v.audio) {
    v.audio = audioPathFor(v);
    patched += 1;
  }
}
writeTs(
  START_FILE,
  "/** Original collection (99) plus ten new passages given today. */",
  "START_VERSES",
  start,
);

const jobs = [];
const seen = new Set();
function queue(v) {
  if (!v.audio) v.audio = audioPathFor(v);
  const dest = path.join(ROOT, "public", v.audio.replace(/^\//, ""));
  if (seen.has(dest)) return;
  seen.add(dest);
  jobs.push({ v, dest });
}

for (const v of start) queue(v);
for (const v of sermons) queue(v);
for (const v of catalog) {
  if (v.audio) queue(v);
}

console.log(
  `studio voices force=${FORCE} start=${start.length} sermons=${sermons.length} jobs=${jobs.length} patchedStart=${patched}`,
);

let made = 0;
let skipped = 0;
let failed = 0;

await mapPool(jobs, POOL, async ({ v, dest }) => {
  const kind = kindOf(v);
  const label = `${kind.toUpperCase().padEnd(6)} ${v.r} (${voiceIdFor(kind)})`;
  process.stdout.write(`${label}… `);
  try {
    const result = await voiceToFile(v, dest, KEY, { force: FORCE });
    if (result.skipped) {
      skipped += 1;
      console.log("skip");
    } else {
      made += 1;
      console.log(`${result.bytes} bytes`);
    }
  } catch (err) {
    console.log("FAIL", err.message);
    try {
      const result = await voiceToFile(v, dest, KEY, { force: true });
      if (result.made) {
        made += 1;
        failed -= 0;
        console.log(`  retry ${result.bytes} bytes`);
      } else {
        failed += 1;
      }
    } catch (err2) {
      failed += 1;
      console.log("  retry FAIL", err2.message);
    }
  }
});

console.log(`done made=${made} skipped=${skipped} failed=${failed} jobs=${jobs.length}`);
if (failed) process.exitCode = 1;
