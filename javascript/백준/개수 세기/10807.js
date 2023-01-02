let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

input.shift();

const numbers = input.shift().split(" ").map(Number);

const find = Number(input[0]);

let result = 0;

numbers.forEach((number) => {
  if (number === find) {
    result++;
  }
});

console.log(result);
