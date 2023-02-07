let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString();

const arr = input.split("-").map((str) => {
  const newArr = [];
  if (!str.includes("+")) {
    newArr.push(Number(str));
  } else {
    newArr.push(
      str
        .split("+")
        .map(Number)
        .reduce((a, b) => a + b)
    );
  }
  return newArr;
});

let answer = 0;

arr.flat().forEach((number, index) => {
  if (index === 0) {
    answer += number;
  } else {
    answer -= number;
  }
});

console.log(answer);
