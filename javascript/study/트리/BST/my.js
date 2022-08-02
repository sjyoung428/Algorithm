class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) return undefined; // 중복 허용 안함

      // newNode value 가 비교되는 node의 value 보다 작을 경우
      if (value < current.value) {
        // 비교되는 node의 left가 비어있을 경우
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left; // 비교되는 node의  left에 다른 node가 있는 경우
      }

      // newNode value 가 비교되는 node의 value 보다 클 경우
      if (value > current.value) {
        // 비교되는 node의 right가 비어있을 경우
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right; // 비교되는 node의  right에 다른 node가 있는 경우
      }
    }
  }

  find(value) {
    if (this.root === null) return undefined;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true; // value 값을 찾았을 경우
      }
    }

    if (!current) return undefined;

    return current;
  }
}

const bst = new BST();

bst.insert(4);
bst.insert(3);
bst.insert(10);
bst.insert(199);
bst.insert(13);
bst.insert(1);

console.log(bst.find(100000));
