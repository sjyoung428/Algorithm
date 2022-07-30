class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
    return this.size;
  }

  pop() {
    if (this.size < 1) return null;

    if (this.size === 1) {
      const popNode = this.first;
      this.first = null;
      this.last = null;
      this.size = 0;
      return popNode;
    }

    const popNode = this.first;
    this.first = this.first.next;
    popNode.next = null;
    this.size--;

    return popNode;
  }
}
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

stack.pop();
stack.pop();
console.log(stack);
