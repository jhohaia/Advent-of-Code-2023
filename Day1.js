//TODO https://adventofcode.com/2023/day/1

const fs = require("fs");

const data = fs.readFileSync("./data/Day1.txt", "utf8");

const lines = data.split("\n");

let sum = 0;

lines.forEach((line) => {
  const firstDigit = line.match(/\d/)[0];

  const lastDigit = line.match(/\d/g).pop();

  const number = parseInt(firstDigit + lastDigit);

  sum += number;
});

console.log(sum);
