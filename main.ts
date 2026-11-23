import { mkdirSync, writeFileSync } from "node:fs";

const sentence = "You've just explained that app idea to me so clearly—say it just like that on make.fun and let the AI build a first version, and tonight you can try it out on your phone, tweak it, or toss it, all without writing a line of code.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
