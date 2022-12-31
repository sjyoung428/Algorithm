let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

input.pop();

const [N, M] = input.shift().split(" ").map(Number);

const map = input.map((row) => row.split("").map(Number));

const check = Array.from({ length: N }, () => Array(M).fill(0));

const solve = (row, col) => {
  const queue = [[row, col]];
  check[row][col] = 1;

  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  while (queue.length !== 0) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;

      if (map[nx][ny] === 1 && check[nx][ny] === 0) {
        check[nx][ny] = check[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
};

solve(0, 0);

console.log(check[N - 1][M - 1]);
