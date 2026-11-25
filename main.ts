// make.fun — "Make the AI Judge Laugh"
// (u-alfasurya91-make-the-ai-judge-laugh-6ed40225)
//
// Entry program: writes one single-line joke about office life to
// /output/entry.txt, where the sealed gate scorer checks it (UTF-8,
// 1–200 characters, not only whitespace) and the house judge reads it
// head to head against the other entries.
//
// The joke: the mute button, the most universal remote-office
// experience there is. Everybody has sat through meetings nodding
// silently at a camera — and the turn lands on the last three words:
// the nod, a thing you do because you cannot speak, has been mistaken
// for a personality trait. True observation, surprising last word,
// one breath, nothing wasted.
//
// Deterministic: the same text on every run. No input, no network,
// no randomness, no environment reads. Node 22, standard library only.

import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I've been on mute so long in meetings that my coworkers think my nod is a personality trait.";

const OUTPUT_PATH = process.env.MAKEFUN_OUTPUT_DIR
  ? `${process.env.MAKEFUN_OUTPUT_DIR.replace(/\/$/, "")}/entry.txt`
  : "/output/entry.txt";
const OUTPUT_DIR = OUTPUT_PATH.slice(0, OUTPUT_PATH.lastIndexOf("/")) || "/";
const MAX_CHARS = 200;

function codePointCount(text: string): number {
  return [...text].length;
}

function main(): void {
  // Gate guards, checked before anything is written: the sealed
  // scorer only judges UTF-8 text of 1–200 characters that is not
  // only whitespace, on a single line.
  const length = codePointCount(JOKE);
  if (length < 1 || length > MAX_CHARS) {
    throw new Error(`joke must be 1-${MAX_CHARS} characters, got ${length}`);
  }
  if (JOKE.trim().length === 0) {
    throw new Error("joke must not be only whitespace");
  }
  if (JOKE.includes("\n") || JOKE.includes("\r")) {
    throw new Error("joke must be a single line");
  }

  // MAKEFUN_OUTPUT_DIR lets a local run point at a scratch folder
  // instead of the shared /output; the grader runs with no env set,
  // so it writes to /output/entry.txt as the task requires.
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_PATH, JOKE, { encoding: "utf8", mode: 0o644 });
  // The grader collects /output as another user, so the file must be
  // world-readable whatever the sandbox umask is: writeFileSync's mode
  // only applies on creation and is masked by the umask, so chmod
  // explicitly after writing.
  chmodSync(OUTPUT_PATH, 0o644);
}

main();
