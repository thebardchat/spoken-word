import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, test } from "node:test";
import {
  clearDrcLedgerMemo,
  compressorFilter,
  isDrcCurrent,
  listStudioAudio,
  loadDrcLedger,
  markDrc,
  saveDrcLedger,
  seedDrcFromStamp,
} from "./studio.mjs";

function tmpAudio() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "drc-"));
  fs.mkdirSync(path.join(root, "sweet"));
  fs.mkdirSync(path.join(root, "god"));
  fs.mkdirSync(path.join(root, "sermon"));
  process.env.SANCTUARY_AUDIO_ROOT = root;
  clearDrcLedgerMemo();
  return root;
}

afterEach(() => {
  delete process.env.SANCTUARY_AUDIO_ROOT;
  clearDrcLedgerMemo();
});

function writeMp3(dir, name, bytes, mtimeMs) {
  const file = path.join(dir, name);
  fs.writeFileSync(file, Buffer.alloc(bytes, 1));
  if (mtimeMs) {
    const at = mtimeMs / 1000;
    fs.utimesSync(file, at, at);
  }
  return file;
}

test("ledger skips a file after it is marked", () => {
  const root = tmpAudio();
  const file = writeMp3(path.join(root, "sweet"), "john-3-16.mp3", 4000);
  const ledger = loadDrcLedger();
  assert.equal(isDrcCurrent(file, "sweet", ledger), false);
  markDrc(file, "sweet", ledger);
  saveDrcLedger(ledger);
  clearDrcLedgerMemo();
  const again = loadDrcLedger();
  assert.equal(isDrcCurrent(file, "sweet", again), true);
  assert.equal(again.files["sweet/john-3-16.mp3"].filter, compressorFilter("sweet"));
});

test("changed size is not current — would compress once, not twice", () => {
  const root = tmpAudio();
  const file = writeMp3(path.join(root, "god"), "john-14-6.mp3", 4000);
  const ledger = loadDrcLedger();
  markDrc(file, "god", ledger);
  assert.equal(isDrcCurrent(file, "god", ledger), true);
  fs.writeFileSync(file, Buffer.alloc(5000, 2));
  assert.equal(isDrcCurrent(file, "god", ledger), false);
});

test("stamp seeds existing files and leaves newer takes unmarked", () => {
  const root = tmpAudio();
  const stampAt = Date.parse("2026-09-01T20:08:17.603Z");
  fs.writeFileSync(path.join(root, ".drc-applied"), "2026-09-01T20:08:17.603Z\n156 files\n");
  const oldFile = writeMp3(path.join(root, "sweet"), "old.mp3", 4000, stampAt - 60_000);
  const newFile = writeMp3(path.join(root, "sweet"), "new.mp3", 4000, stampAt + 60_000);
  const jobs = listStudioAudio();
  const ledger = loadDrcLedger();
  const seeded = seedDrcFromStamp(jobs, ledger);
  assert.equal(seeded, 1);
  assert.equal(isDrcCurrent(oldFile, "sweet", ledger), true);
  assert.equal(isDrcCurrent(newFile, "sweet", ledger), false);
  const again = seedDrcFromStamp(jobs, ledger);
  assert.equal(again, 0);
});

test("god and sweet use different compressor signatures", () => {
  assert.notEqual(compressorFilter("god"), compressorFilter("sweet"));
  assert.match(compressorFilter("god"), /ratio=4/);
  assert.match(compressorFilter("sweet"), /ratio=2.8/);
  assert.match(compressorFilter("god"), /level=false/);
});
