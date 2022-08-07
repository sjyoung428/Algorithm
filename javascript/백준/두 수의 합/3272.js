let fs = require("fs");

let input = fs.readFileSync("dev/stdin.txt").toString().split("\n");

let size = Number(input.shift());

let data = input.shift();

const x = Number(input[0]);

let sortedData = data
  .split(" ")
  .sort((a, b) => a - b)
  .map((value) => Number(value));

let result = 0;

const solve = (array) => {
  let left = 0;
  let right = size - 1;

  while (left < right) {
    let check = array[left] + array[right];
    if (check === x) {
      result++;
      right--;
    } else if (check < x) {
      left++;
    } else if (check > x) {
      right--;
    }
  }
};

solve(sortedData);

console.log(result);
