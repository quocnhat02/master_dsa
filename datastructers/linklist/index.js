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

  findNthNode(nth) {
    let node = this.head;
    let position = 1;
    while (position < nth) {
      node = node.next;
      position++;
    }
    return node;
  }

  insertAtIndex(nth, data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      let node = this.findNthNode(nth);

      if (node.next == null) {
        this.insertAtTail(data);
      }

      newNode.next = node.next;
      node.next = newNode;
      if (newNode.next == null) {
        this.tail = node;
      }
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

// linkList.insertAtHead(1);
// linkList.insertAtHead(2);
// linkList.insertAtHead(3);
linkList.insertAtTail(1);
linkList.insertAtTail(2);
linkList.insertAtTail(3);
linkList.insertAtTail(4);
linkList.insertAtIndex(3, 5);

linkList.print();

console.log('head', linkList.head);
console.log('tail', linkList.tail);
