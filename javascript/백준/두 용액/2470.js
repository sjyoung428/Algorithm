let fs = require("fs");

let input = fs.readFileSync("dev/stdin.txt").toString().split("\n");

const count = input.shift();

const data = input[0]
  .split(" ")
  .map((value) => Number(value))
  .sort((a, b) => a - b);

let result = Infinity;

let answer = "";

const solve = (array) => {
  let left = 0;
  let right = count - 1;

  while (left < right) {
    let check = array[left] + array[right];

    if (Math.abs(check) <= result) {
      result = Math.abs(check);
      answer = String(data[left]) + " " + String(data[right]);
    }
    if (check < 0) {
      left++;
    } else {
      right--;
    }
  }
};
solve(data);

console.log(answer);
