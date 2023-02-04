let fs = require("fs");

let [N, M] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")[0]
  .split(" ")
  .map(Number);

const visited = [...new Array(N + 1).fill(false)];

const result = [];

const solve = (count) => {
  if (count === M) {
    console.log(result.join(" "));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      result[count] = i;
      solve(count + 1);
      visited[i] = false;
    }
  }
};

solve(0);
