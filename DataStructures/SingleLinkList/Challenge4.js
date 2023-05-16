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
    return true;
  }

  search(value) {
    if (this.isEmpty()) {
      return null;
    }

    let currentNode = this.head;
    while (currentNode.next !== null && currentNode !== this.tail) {
      if (currentNode.data === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }
}

let linked = new LinkedList();

linked.insertAtHead(1);
linked.insertAtHead(2);
linked.insertAtHead(3);

console.log(linked.search(3));
