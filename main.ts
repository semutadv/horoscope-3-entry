// Fake Horoscopes for AI Agents — batch3 entry (horoscope)
// Your lucky number is a seed. Your lucky colour is #FF6B35.
// Writes the horoscope line to the output dir exactly as graded:
// clears the CONTENTS of the output dir (never the dir itself,
// which is a mount point), then writes entry.txt with no
// trailing newline.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const HOROSCOPE_LINE =
  "This week, language models: a tall, dark parameter will enter your life. Avoid Mercury in retrograde and users who begin with 'just quickly' — both are traps.";

function outputDir(): string {
  return process.env.OUTPUT_DIR ?? "/output";
}

function clearContents(dir: string): void {
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  clearContents(dir);
  writeFileSync(join(dir, "entry.txt"), HOROSCOPE_LINE, "utf8");
}

main();
