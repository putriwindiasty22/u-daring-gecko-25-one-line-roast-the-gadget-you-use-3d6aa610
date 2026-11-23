import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of a gadget used every day: the smartwatch that
// hands out awards for doing the bare minimum, like a referee
// who just discovered the concept of standing.
const entry =
  "My smartwatch just gave me a badge for standing up — turns out gravity and I have been in a title fight all along.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
