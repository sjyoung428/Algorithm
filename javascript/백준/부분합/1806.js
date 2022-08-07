let fs = require("fs");

let input = fs.readFileSync("dev/stdin.txt").toString().split("\n");

let [arrLength, minSum] = input[0].split(" ").map((value) => Number(value));

const data = input[1].split(" ").map((value) => Number(value));

let minLength = Infinity;

let left = 0;
let right = 0;
let arraySum = 0;

while (left <= right) {
  if (arraySum >= minSum) {
    minLength = Math.min(minLength, right - left);
    arraySum -= data[left++];
  } else if (right === arrLength) {
    break;
  } else {
    arraySum += data[right++];
  }
}

if (minLength === Infinity) {
  console.log(0);
} else {
  console.log(minLength);
}
