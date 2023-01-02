let fs = require("fs");

let input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const check = new Array(31).fill(0);

input.forEach((number) => {
  check[number] = 1;
});

check.forEach((number, index) => {
  if (index === 0) return;

  if (number === 0) {
    console.log(index);
  }
});
