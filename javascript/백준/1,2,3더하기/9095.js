let fs = require("fs");

let input = fs
  .readFileSync("dev/stdin")
  .toString()
  .split("\n")
  .map((data) => Number(data));

const testCase = Number(input.shift());

// an = an-1 + an-2 + an-3

const dp = new Array(11);

dp[1] = 1;
dp[2] = 2;
dp[3] = 4;
dp[4] = 7;

for (let i = 4; i < 11; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

for (let i = 0; i < testCase; i++) {
  console.log(dp[input[i]]);
}
