let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

//하;;
input.pop();

const computerCount = Number(input.shift());

input.shift();

const network = new Array();

for (let i = 0; i < computerCount + 1; i++) {
  network.push(new Array());
}

input.forEach((data) => {
  const [node1, node2] = data.split(" ").map((node) => Number(node));

  network[node1].push(node2);
  network[node2].push(node1);
});

const checkVirus = new Array(computerCount + 1).fill(false);

const solve = (start) => {
  const visited = [];
  const queue = [start];

  checkVirus[start] = true;

  while (queue.length !== 0) {
    const infected = queue.shift();

    for (let i of network[infected]) {
      if (checkVirus[i] === false) {
        checkVirus[i] = true;
        queue.push(i);
        visited.push(i);
      }
    }
  }

  return visited;
};

console.log(solve(1).length);
