class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // push 맨뒤에 노드를 추가
  push(value) {
    this.length += 1; // 길이 증가
    const newNode = new Node(value); // 새로운 노드 생성
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode; // 연결리스트가 비어있을 때 head와 tail 초기화
    } else {
      this.tail.next = newNode;
      this.tail = newNode; // 새로운 노드가 들어올 때 tail 갱신
    }
    return this;
  }
  // pop 맨 뒤의 노드를 제거하고 그 노드를 리턴
  pop() {
    if (!this.head) return undefined; // 연결리스트가 비어있을 때

    if (this.length === 1) {
      const popNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return popNode;
    } // 연결리스트에 데이터가 하나 있을 때

    let check = this.head; // pop으로 return될 노드
    let newTail = this.head; // 새로운 tail이 될 노드

    while (check.next) {
      newTail = check;
      check = check.next;
    }
    this.tail = newTail;
    newTail.next = null;
    this.length--;
    return check;
  }
  // shift 맨 앞의 노드를 제거하고 그 노드를 리턴
  shift() {
    if (!this.head) return undefined;

    if (this.length === 1) {
      const shiftNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return shiftNode;
    }

    const shiftNode = this.head;
    this.head = this.head.next;
    this.length--;
    return shiftNode;
  }

  // unshift 맨 앞에 노드 추가
  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // get 인덱스 위치에 있는 노드 return
  get(index) {
    if (index < 0) return null;

    if (!this.head) return null;

    if (index > this.length - 1) return null;

    let check = this.head;
    for (let i = 0; i <= index; i++) {
      if (i === index) return check;
      check = check.next;
    }
  }

  // set 인덱스 위치의 노드를 주어진 value 값으로 업데이트하고 true를 리턴 target이 존재하지 않으면 false를 리턴
  set(index, value) {
    let targetNode = this.get(index);
    if (!targetNode) return false;
    targetNode.value = value;
    return true;
  }

  //insert 인덱스 위치에 value 삽입
  insert(index, value) {
    const newNode = new Node(value);

    if (index === 0) {
      this.unshift(value);
      return this;
    }

    const prevNode = this.get(index - 1);
    const nextNode = this.get(index);

    if (nextNode) {
      newNode.next = nextNode;
      prevNode.next = newNode;
      this.length++;
      return this;
    }

    if (prevNode) {
      this.push(value);
      return this;
    }

    return false;
  }

  // remove 인덱스 위치의 노드 제거
  remove(index) {
    if (index < 0 || index > this.length - 1) return false;

    if (index === 0) {
      this.shift();
      return this;
    }

    if (index === this.length - 1) {
      this.pop();
      return this;
    }

    const prevNode = this.get(index - 1);
    const targetNode = this.get(index);

    prevNode.next = targetNode.next; // prevNode와 targetNode의 다음 노드와 연결
    targetNode.next = null; // targetNode와 targetNode의 다음 노드와 연결 끊기
    this.length--;
    return this;
  }

  // reverse
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const list = new SinglyLinkedList();

list.push("1");
list.push("2");
list.push("3");

console.log(list.reverse());
