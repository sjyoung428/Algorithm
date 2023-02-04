let fs = require("fs");

let input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input.shift();

input.sort((a, b) => a - b);

const average = Math.round(input.reduce((a, c) => a + c) / N);

const mid = input[Math.floor(N / 2)];

const getMost = () => {
  const map = new Map();
  input.forEach((number) => {
    if (map.has(number) === false) {
      map.set(number, 1);
    } else if (map.has(number) === true) {
      map.set(number, map.get(number) + 1);
    }
  });

  let most = 0;
  let answer = [];

  map.forEach((count, key) => {
    if (most < count) {
      most = count;
      answer = [];
      answer.push(key);
    } else if (most === count) {
      answer.push(key);
    }
  });
  return answer.length === 1 ? answer[0] : answer[1];
};

const range = input.at(-1) - input.at(0);

console.log(average);
console.log(mid);
console.log(getMost());
console.log(range);
