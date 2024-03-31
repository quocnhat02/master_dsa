class Queue {
  constructor(mySize) {
    this.items = [];
    this.size = mySize;
    this.front = 0;
    this.back = -1;
  }

  isFull() {
    return this.items.length >= this.size;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  getFront() {
    if (this.items.length !== 0) {
      return this.items[0];
    } else {
      console.log('No elements in the queue');
    }
  }

  enqueue(element) {
    if (this.items.length >= this.size) {
      console.log('Queue is full');
    } else {
      this.items.push(element);
    }
  }

  dequeue() {
    if (this.items.length === 0) {
      console.log('No elements');
    } else {
      return this.items.shift();
    }
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node(-1);
    this.length = 0;
  }

  isEmpty() {
    return this.length == 0;
  }

  getHead() {
    return this.head;
  }

  insertAtHead(dt) {
    let tempNode = new Node(dt);
    tempNode.next = this.head.next;
    this.head.next = tempNode;
    this.length++;
    return this;
  }

  insertAtTail(value) {
    let node = new Node(value);

    let currentNode = this.getHead();

    if (currentNode.next === null) {
      currentNode.next = node;
      this.length++;
      return this;
    }

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    this.length++;
    return this;
  }
}
