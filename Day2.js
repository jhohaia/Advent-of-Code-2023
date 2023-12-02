//TODO https://adventofcode.com/2023/day/2

const fs = require("fs");

// \r character is a carriage return - ive removed it from the data
const data = fs.readFileSync("./data/Day2.txt", "utf8").replace(/\r/g, "");

const lines = data.split("\n");

let totalScore = 0;

lines.forEach((line) => {
  const [gameId, cubeSets] = line.split(": ");
  let isPossible = true;

  cubeSets.split("; ").forEach((set) => {
    const cubes = set.split(", ");

    cubes.forEach((cube) => {
      const [num, color] = cube.split(" ");

      if (
        (color === "red" && num > 12) ||
        (color === "green" && num > 13) ||
        (color === "blue" && num > 14)
      ) {
        isPossible = false;
      }
    });

    if (!isPossible) {
      return;
    }
  });

  if (isPossible) {
    totalScore += parseInt(gameId.replace("Game ", ""));
  }
});

console.log("Total Score: ", totalScore);

// --- Part Two ---

let totalPower2 = 0;

lines.forEach((line) => {
  const cubeSets = line.split(": ")[1];
  let maxRed = 0,
    maxGreen = 0,
    maxBlue = 0;

  cubeSets.split("; ").forEach((set) => {
    const cubes = set.split(", ");

    cubes.forEach((cube) => {
      const [num, color] = cube.split(" ");

      if (color === "red" && Number(num) > maxRed) {
        maxRed = Number(num);
      } else if (color === "green" && Number(num) > maxGreen) {
        maxGreen = Number(num);
      } else if (color === "blue" && Number(num) > maxBlue) {
        maxBlue = Number(num);
      }
    });
  });

  totalPower2 += maxRed * maxGreen * maxBlue;
});

console.log("Total Power: ", totalPower2);
