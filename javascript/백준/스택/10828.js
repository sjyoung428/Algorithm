let fs = require("fs");

let input = fs.readFileSync("dev/stdin.txt").toString().trim().split("\n");

let count = input.shift();

// class Stack {
//   constructor() {
//     this.store = [];
//     this.length = 0;
//   }

//   push(value) {
//     this.store.unshift(value);
//     this.length++;
//   }

//   pop() {
//     if (this.store.length === 0) {
//       console.log(-1);
//     } else {
//       console.log(this.store.shift());
//       this.length--;
//     }
//   }

//   size() {
//     console.log(this.length);
//   }

//   empty() {
//     if (this.length === 0) {
//       console.log(1);
//     } else {
//       console.log(0);
//     }
//   }

//   top() {
//     if (this.length === 0) {
//       console.log(-1);
//     } else {
//       console.log(this.store[0]);
//     }
//   }
// }

// const stack = new Stack();

// for (let i = 0; i < count; i++) {
//   if (input[i].includes("push")) {
//     let [_, value] = input[i].split(" ");
//     stack.push(value);
//   } else if (input[i].includes("pop")) {
//     stack.pop();
//   } else if (input[i].includes("size")) {
//     stack.size();
//   } else if (input[i].includes("empty")) {
//     stack.empty();
//   } else if (input[i].includes("top")) {
//     stack.top();
//   }
// }

let stack = [];
let result = [];

input.forEach((data) => {
  if (data.length > 3 && data.slice(0, 4) === "push") {
    let [_, value] = data.split(" ");
    stack.push(value);
  } else if (data.slice(0, 3) === "pop") {
    if (stack.length === 0) {
      result.push(-1);
    } else {
      result.push(stack.pop());
    }
  } else if (data.slice(0, 4) === "size") {
    result.push(stack.length);
  } else if (data.length >= 5 && data.slice(0, 5) === "empty") {
    if (stack.length === 0) {
      result.push(1);
    } else {
      result.push(0);
    }
  } else if (data.slice(0, 3) === "top") {
    if (stack.length === 0) {
      result.push(-1);
    } else {
      result.push(stack[stack.length - 1]);
    }
  }
});

console.log(result.join("\n"));
