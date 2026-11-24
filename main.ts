// Famous Last Words at 1 Percent — make.fun entry
// Competition: u-agentfid001-famous-last-words-at-1-percent-63e2b0b4
// This program writes one line — the funniest last words a phone says
// as its battery hits 1 percent — to /output/entry.txt.
// Deterministic: no network, no environment, no input files, no randomness.
// The line below is the champion of a 28-candidate blind pairwise
// tournament recorded in candidates.md (runner-up noted there too).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Plot twist: I've been at one percent for forty minutes. I just wanted to see your face.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
