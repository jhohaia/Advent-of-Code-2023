// TODO https://adventofcode.com/2023/day/5

const fs = require("fs");
const input = fs.readFileSync("./data/Day5.txt", "utf8").split("\n");

function getNextDestination(id, startingLine, endingLine, lines) {
  for (let lineNum = startingLine; lineNum < endingLine; lineNum++) {
    const [destStart, sourceStart, span] = lines[lineNum]
      .split(/\s+/, 3)
      .map(Number);

    if (id >= sourceStart && id < sourceStart + span) {
      return destStart + (id - sourceStart);
    }
  }
  return id;
}

const part1 = () => {
  const lines = input.map((line) => line.trim());

  // seeds
  const seedArray = lines[0].split(": ")[1].split(/\s+/).map(Number);

  const startingLines = {
    Seed: 0,
    Soil: 0,
    Fertilizer: 0,
    Water: 0,
    Light: 0,
    Temp: 0,
    Humidity: 0,
  };

  for (let lineNum = 1; lineNum < lines.length; lineNum++) {
    switch (lines[lineNum]) {
      case "seed-to-soil map:":
        startingLines["Seed"] = lineNum;
        break;
      case "soil-to-fertilizer map:":
        startingLines["Soil"] = lineNum;
        break;
      case "fertilizer-to-water map:":
        startingLines["Fertilizer"] = lineNum;
        break;
      case "water-to-light map:":
        startingLines["Water"] = lineNum;
        break;
      case "light-to-temperature map:":
        startingLines["Light"] = lineNum;
        break;
      case "temperature-to-humidity map:":
        startingLines["Temp"] = lineNum;
        break;
      case "humidity-to-location map:":
        startingLines["Humidity"] = lineNum;
        break;
    }
  }

  console.dir(startingLines);

  let minLocation = Number.MAX_SAFE_INTEGER;
  for (const seed of seedArray) {
    let currentLoc = seed;
    let span = 0;
    currentLoc = getNextDestination(
      currentLoc,
      startingLines["Seed"] + 1,
      startingLines["Soil"] - 1,
      lines
    );
    currentLoc = getNextDestination(
      currentLoc,
      startingLines["Soil"] + 1,
      startingLines["Fertilizer"] - 1,
      lines
    );
    currentLoc = getNextDestination(
      currentLoc,
      startingLines["Fertilizer"] + 1,
      startingLines["Water"] - 1,
      lines
    );
    currentLoc = getNextDestination(
      currentLoc,
      startingLines["Water"] + 1,
      startingLines["Light"] - 1,
      lines
    );
    currentLoc = getNextDestination(
      currentLoc,
      startingLines["Light"] + 1,
      startingLines["Temp"] - 1,
      lines
    );
    currentLoc = getNextDestination(
      currentLoc,
      startingLines["Temp"] + 1,
      startingLines["Humidity"] - 1,
      lines
    );
    currentLoc = getNextDestination(
      currentLoc,
      startingLines["Humidity"] + 1,
      lines.length,
      lines
    );

    console.log(`${seed} => ${currentLoc}`);

    minLocation = Math.min(minLocation, currentLoc);
  }
  console.log(`Minimum Location = ${minLocation}`);
};

part1();
