// TODO https://adventofcode.com/2023/day/3

const fs = require("fs");

const data = fs.readFileSync("./data/Day3.txt", "utf8");
const lines = data.split("\n");
let totalParts = 0;

const symbols = ["*", "#", "+", "$", "@", "%", "/", "&", "=", "-"];

for (let i = 0; i < lines.length; i++) {
  for (let j = 0; j < lines[i].length; j++) {
    if (!isNaN(lines[i][j])) {
      let num = "";
      let isPart = false;
      while (j < lines[i].length && !isNaN(lines[i][j])) {
        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            if (
              i + dx >= 0 &&
              i + dx < lines.length &&
              j + dy >= 0 &&
              j + dy < lines[i].length &&
              symbols.includes(lines[i + dx][j + dy])
            ) {
              isPart = true;
              break;
            }
          }
        }
        num += lines[i][j++];
      }
      if (isPart) {
        totalParts += Number(num);
      }
    }
  }
}

console.log("Total Parts: ", totalParts);
