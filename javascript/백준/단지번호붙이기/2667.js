let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

const N = Number(input.shift());

const map = input.map((row) => row.split("").map(Number));

const check = {};

const solve = (row, col) => {
  const queue = [[row, col]];

  check[[row, col]] = true;

  let count = 1;

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  while (queue.length !== 0) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;

      if (map[nx][ny] === 0 || check[[nx, ny]] === true) continue;

      check[[nx, ny]] = true;
      count++;
      queue.push([nx, ny]);
    }
  }

  return count;
};

const result = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1 && !check[[i, j]]) {
      result.push(solve(i, j));
    }
  }
}

let answer = "";

answer = result.length + "\n" + result.sort((a, b) => a - b).join("\n");

console.log(answer);
