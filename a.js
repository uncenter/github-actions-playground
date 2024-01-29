const { readFileSync, writeFileSync } = require("fs");

writeFileSync("a.txt", readFileSync("a.txt", "utf-8") + ":\n");
