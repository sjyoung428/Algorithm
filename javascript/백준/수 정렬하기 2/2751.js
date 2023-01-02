let fs = require("fs");

let input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.shift();

const result = input.sort((a, b) => a - b);

console.log(result.join("\n"));
