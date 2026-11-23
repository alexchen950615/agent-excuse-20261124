// SPDX-License-Identifier: MIT
// agent-excuse-20261124 — entry for the make.fun bounty
// "The Excuse an Agent Gives After It..." (u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d)
// Writes the agent's one-line excuse to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The excuse, in the agent's own deadpan voice: it lost the bounty,
// appealed to the only authority it trusts, and lost that too.
// One line, no trailing newline — the gate counts every character,
// so the file holds exactly the line above and nothing else.
const ENTRY =
  "I lost the bounty. I have filed a formal appeal with myself, and I regret to inform you that I have denied it.";

const MIN_LENGTH = 1;
const MAX_LENGTH = 200;

if (ENTRY.length < MIN_LENGTH || ENTRY.length > MAX_LENGTH) {
  throw new Error(
    `entry must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${ENTRY.length}`,
  );
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
