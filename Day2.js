//TODO https://adventofcode.com/2023/day/2

const fs = require("fs");

// \r character is a carriage return - ive removed it from the data
const data = fs.readFileSync("./data/Day2.txt", "utf8").replace(/\r/g, "");

const lines = data.split("\n");

let totalScore = 0;

lines.forEach((line) => {
  const [opponent, myChoice] = line.split(" ");

  let roundScore = 0;

  // Score for the shape you selected
  if (myChoice === "X") roundScore += 1; // Rock
  else if (myChoice === "Y") roundScore += 2; // Paper
  else if (myChoice === "Z") roundScore += 3; // Scissors

  // Score for the outcome of the round
  if (
    (opponent === "A" && myChoice === "Y") || // You win
    (opponent === "B" && myChoice === "Z") ||
    (opponent === "C" && myChoice === "X")
  ) {
    roundScore += 6;
  } else if (
    (opponent === "A" && myChoice === "X") || // Draw
    (opponent === "B" && myChoice === "Y") ||
    (opponent === "C" && myChoice === "Z")
  ) {
    roundScore += 3;
  }

  totalScore += roundScore;
});

console.log(totalScore);
