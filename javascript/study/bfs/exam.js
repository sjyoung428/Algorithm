const graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

const visited = new Array(9).fill(false);

const bfs = (graph, start, visited) => {
  let queue = [start];

  visited[start] = true;

  while (queue.length !== 0) {
    let v = queue.shift();
    console.log(v);
    for (let i of graph[v]) {
      if (!visited[i]) {
        visited[i] = true;
        queue.push(i);
      }
    }
  }
};

bfs(graph, 1, visited);

// 1 2 3 8 7 4 5 6
