#!/usr/bin/env node
/**
 * Daily DRC catch-up for sanctuary studio takes.
 * Sweet: gentle 2.8:1. God: 4:1, more like a recording.
 * Per-file ledger — skips already-mastered takes. Never double-compresses
 * unless --force. Never called from the browser.
 */
import fs from "node:fs";
import path from "node:path";
import {
  compressorFilter,
  isDrcCurrent,
  listStudioAudio,
  loadDrcLedger,
  mapPool,
  markDrc,
  masterMp3,
  saveDrcLedger,
  seedDrcFromStamp,
} from "./studio.mjs";

const FORCE = process.argv.includes("--force");
const POOL = 4;

export async function runCompress({ force = false } = {}) {
  const jobs = listStudioAudio();
  const ledger = loadDrcLedger({ reload: true });
  const seeded = force ? 0 : seedDrcFromStamp(jobs, ledger);
  if (seeded) saveDrcLedger(ledger);

  const pending = jobs.filter(({ kind, file }) => force || !isDrcCurrent(file, kind, ledger));

  const summary = {
    files: jobs.length,
    pending: pending.length,
    seeded,
    force,
    made: 0,
    skipped: jobs.length - pending.length,
    failed: 0,
    ledger: Object.keys(ledger.files).length,
  };

  console.log(`drc files=${jobs.length} pending=${pending.length} seeded=${seeded} force=${force}`);
  console.log(`sweet ${compressorFilter("sweet")}`);
  console.log(`god   ${compressorFilter("god")}`);

  if (!pending.length) {
    console.log("nothing to compress");
    return summary;
  }

  await mapPool(pending, POOL, async ({ kind, file }) => {
    process.stdout.write(`${kind.padEnd(6)} ${path.basename(file)}… `);
    try {
      const result = await masterMp3(file, file, kind);
      if (result?.skipped) {
        summary.skipped += 1;
        summary.pending -= 1;
        console.log("skip", result.reason || "");
        return;
      }
      markDrc(file, kind, ledger);
      summary.made += 1;
      console.log("ok");
    } catch (err) {
      summary.failed += 1;
      console.log("FAIL", err.message);
    }
  });

  saveDrcLedger(ledger);
  summary.ledger = Object.keys(ledger.files).length;
  console.log(
    `done made=${summary.made} skipped=${summary.skipped} failed=${summary.failed} ledger=${summary.ledger}`,
  );
  return summary;
}

const isMain =
  Boolean(process.argv[1]) && path.resolve(process.argv[1]) === path.resolve(import.meta.filename);

if (isMain) {
  const summary = await runCompress({ force: FORCE });
  if (summary.failed) process.exitCode = 1;
}
