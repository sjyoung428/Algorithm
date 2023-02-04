let fs = require("fs");

let input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number)[0];

let fibCount = 0;

const fib = (n) => {
  if (n === 1 || n === 2) {
    fibCount++;
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
};

fib(input);

let fibonacciCount = 0;

const dp = new Array(input + 1).fill(0);

let fibonacci = (n) => {
  dp[1] = 1;
  dp[2] = 1;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
    fibonacciCount++;
  }
};

fibonacci(input);

let result = "";

result = fibCount + " " + fibonacciCount;

console.log(result);
