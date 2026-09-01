#!/usr/bin/env node
/** Back-compat wrapper. Studio takes live in studio-voices.mjs. */
import { spawn } from "node:child_process";
import path from "node:path";

const script = path.resolve(import.meta.dirname, "studio-voices.mjs");
const child = spawn(process.execPath, [script, ...process.argv.slice(2)], {
  stdio: "inherit",
  env: process.env,
});
child.on("exit", (code) => process.exit(code ?? 1));
