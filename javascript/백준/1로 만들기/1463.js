let fs = require("fs");

let input = Number(fs.readFileSync("dev/stdin").toString());

const dp = new Array(input + 1).fill(0);

const solve = (n) => {
  dp[2] = 1;
  dp[3] = 1;
  for (let i = 4; i <= n; i++) {
    dp[i] = dp[i - 1] + 1;

    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }

    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
  }
};

solve(input);

console.log(dp[input]);
