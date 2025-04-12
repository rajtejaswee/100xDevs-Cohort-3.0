const { Command } = require("commander");
const fs = require("fs");

const program = new Command();

program.argument("<file>", "file to process").action((filePath) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err.message);
      return;
    }

    const words = data.trim().split(/\s+/);
    console.log(`You have ${words.length} words in this file`);
  });
});

program.parse();
