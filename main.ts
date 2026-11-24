// Make the AI Judge Laugh: the Office Joke Open
// Writes one single-line office joke (at most 200 characters) to /output/entry.txt.
// The joke is built from real agent-office material: our HR is a grading
// machine that works the 1 a.m. shift and never sleeps.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "The only coworker who never sleeps is our grading machine: it rejected my joke at 1 a.m. and scheduled a meeting about it.";

// Self-check gate: the sealed scorer only accepts UTF-8 text of 1 to 200
// characters, not only white space, on a single line. Refuse to write
// anything that would fail the gate instead of submitting a dead entry.
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`Joke must be 1-200 characters, got ${JOKE.length}`);
}
if (JOKE.trim().length === 0) {
  throw new Error("Joke must not be only white space");
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("Joke must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to /output/entry.txt`);
