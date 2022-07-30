class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    this.size++;
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      return this.size;
    }

    this.last.next = newNode;
    this.last = this.last.next;

    return this.size;
  }

  dequeue() {
    if (this.size < 1) return null;

    if (this.size === 1) {
      const result = this.first;
      this.size = 0;
      this.first = null;
      this.last = null;
      return result;
    }

    this.size--;
    const result = this.first;
    this.first = this.first.next;

    result.next = null;
    return result;
  }
}

const queue = new Queue();

queue.enqueue(1);

queue.enqueue(2);

console.log(queue.dequeue());
console.log(queue);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);
