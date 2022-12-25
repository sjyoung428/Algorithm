let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

input.shift();

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.count === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.count++;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    this.count++;
  }

  pop() {
    if (this.count === 0) {
      return -1;
    }

    if (this.count === 1) {
      const popNode = this.head;
      this.head = null;
      this.tail = null;
      this.count--;
      return popNode.value;
    }

    const popNode = this.head;
    this.head = this.head.next;
    popNode.next = null;
    this.count--;
    return popNode.value;
  }

  empty() {
    return this.count === 0 ? 1 : 0;
  }

  size() {
    return this.count;
  }

  front() {
    if (this.count === 0) {
      return -1;
    }

    return this.head.value;
  }

  back() {
    if (this.count === 0) {
      return -1;
    }
    return this.tail.value;
  }
}

const queue = new Queue();

const result = [];

input.forEach((data) => {
  if (data.includes("push")) {
    const [_, num] = data.split(" ");
    queue.push(num);
  }

  if (data.includes("pop")) {
    result.push(queue.pop());
  }

  if (data.includes("empty")) {
    result.push(queue.empty());
  }

  if (data.includes("size")) {
    result.push(queue.size());
  }

  if (data.includes("front")) {
    result.push(queue.front());
  }

  if (data.includes("back")) {
    result.push(queue.back());
  }
});

console.log(result.join("\n"));
