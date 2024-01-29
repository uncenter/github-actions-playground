const { readFileSync, writeFileSync } = require("fs");

writeFileSync("b.txt", readFileSync("b.txt", "utf-8") + ":\n");
