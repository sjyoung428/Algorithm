let fs = require("fs");

let input = fs.readFileSync("dev/stdin.txt").toString().split("\n");

const result = Number(input[0]);

const count = Number(input[1]);

input.splice(0, 2);

let check = 0;

for (let i = 0; i < count; i++) {
  let [price, num] = input[i].split(" ");
  check += Number(price) * Number(num);
}

if (result === check) {
  console.log("Yes");
} else {
  console.log("No");
}

// const result = Number(input[0]);

// let check = 0;

// input.forEach((data, index) => {
//   if (index > 1) {
//     let [price, num] = data.split(" ");
//     check += Number(price) * Number(num);
//   }
// });

// if (result === check) {
//   console.log("Yes");
// } else {
//   console.log("No");
// } => 이건 왜 틀렸지?
