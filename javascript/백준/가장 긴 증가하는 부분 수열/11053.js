let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

const A = input[1].split(" ").map(Number);

const dp = new Array(N).fill(1);

const solve = () => {
  for (let i = 1; i < N; i++) {
    let max = 0;

    for (let j = 0; j < i; j++) {
      if (A[i] > A[j]) {
        max = Math.max(max, dp[j] + 1);
      }
    }

    dp[i] = Math.max(max, dp[i]);
  }
};

solve();
console.log(Math.max(...dp));
