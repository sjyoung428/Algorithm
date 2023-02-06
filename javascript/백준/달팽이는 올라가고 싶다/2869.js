let fs = require("fs");

let [A, B, V] = fs.readFileSync("dev/stdin").toString().split(" ").map(Number);

let total = V - A;

let day = A - B;

const result = Math.ceil(total / day) + 1;

console.log(result);
