// Challenge 4: Find the Length of a Linked List

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  getHeadNode() {
    return this.head;
  }

  isEmpty() {
    return this.length === 0;
  }

  insertAtHead(value) {
    if (this.isEmpty()) {
      this.head = new Node(value);
      this.tail = this.head;
      this.length++;
      return this.length;
    }

    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this.length;
  }

  insertAtTail(value) {
    if (this.isEmpty()) {
      this.head = new Node(value);
      this.tail = this.head;
      this.length++;
      return this.length;
    }
    this.tail.next = new Node(value);
    this.tail = this.tail.next;
    this.length++;
    return this.length;
  }

  deleteAtHead() {
    if (this.isEmpty()) {
      return null;
    }
    this.head = this.head.next;
    this.length--;

    if (this.length === 1) {
      this.tail = this.head;
    }
    return true;
  }

  search(value) {
    if (this.isEmpty()) {
      return false;
    }
    if (this.head.data === value) {
      return true;
    }
    if (this.tail.data === value) {
      return true;
    }

    let currentNode = this.head.next;
    while (currentNode.next !== null && currentNode !== this.tail) {
      if (currentNode.data === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  deleteVal(value) {
    if (this.isEmpty()) {
      return false;
    }

    if (this.head.data === value) {
      return this.deleteAtHead();
    }
    let currentNode = this.head.next;
    let previousNode = this.head;
    while (currentNode.next !== null) {
      if (currentNode.data === value) {
        previousNode.next = currentNode.next;
        this.length--;
        if (this.length === 1) {
          this.tail = this.head;
        }
        return this.length;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode.data === value) {
      previousNode.next = currentNode.next;
      this.tail = previousNode;
      this.length--;
      return this.length;
    }

    return false;
  }

  reverse() {
    if (this.isEmpty() || this.length === 1) {
      return;
    }

    let prev = null;
    let nextNode = null;
    let currentNode = this.head;
    this.tail = this.head;
    while (currentNode !== null) {
      nextNode = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = nextNode;
    }

    this.head = prev;
    return true;
  }
}

let linked = new LinkedList();

linked.insertAtTail(1);
linked.insertAtTail(2);
linked.insertAtTail(3);
linked.insertAtTail(4);
linked.insertAtTail(5);

// 1 2 3 4 5 6 7 8 9

// linked.deleteVal(3);
linked.reverse();

console.log(linked);
