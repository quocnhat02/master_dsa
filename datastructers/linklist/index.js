class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head == null ? true : false;
  }

  insertAtHead(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  insertAtTail(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  print() {
    let pos = this.head;
    while (pos !== null) {
      console.log(pos);
      pos = pos.next;
    }
  }
}

const linkList = new LinkedList();

linkList.insertAtHead(1);
linkList.insertAtHead(2);
linkList.insertAtHead(3);

// linkList.print();

console.log('head', linkList.head);
console.log('tail', linkList.tail);
