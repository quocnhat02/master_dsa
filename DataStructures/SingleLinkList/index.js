class Node {
  constructor(data) {
    this.data = data;
    this.nextElement = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insertAtHead(value) {
    let newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.nextElement = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  insertAtTail(value) {
    let newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.nextElement = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  search(value) {
    if (this.length === 0) {
      return false;
    }

    let currentNode = this.head;

    while (currentNode.nextElement !== null) {
      if (currentNode.data === value) {
        return true;
      }
      currentNode = currentNode.nextElement;
    }

    if (currentNode.data === value) {
      return true;
    }

    return false;
  }
}

let linkedList = new LinkedList();

linkedList.insertAtTail(1);
linkedList.insertAtTail(2);
linkedList.insertAtTail(3);

console.log(linkedList.search(3));
