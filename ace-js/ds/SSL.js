class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head === null ? true : false;
  }

  display() {
    let result = '';
    let currentNode = this.head;

    while (currentNode.next !== null) {
      result += currentNode.data + ' -> ';
      currentNode = currentNode.next;
    }

    result += currentNode.data;

    return result;
  }

  insertAtTail(data) {
    const newNode = new Node(data);
    const checkEmpty = this.isEmpty();

    if (checkEmpty) {
      this.head = newNode;
    } else {
      let currentNode = this.head;

      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }

    return newNode;
  }

  insertAtHead(data) {
    const newNode = new Node(data);
    const checkEmpty = this.isEmpty();

    if (checkEmpty) {
      this.head = newNode;
    } else {
      const headNode = this.head;
      newNode.next = headNode;
      this.head = newNode;
    }

    return newNode;
  }

  delete(data) {}

  deleteAtHead() {}

  search(data) {}
}

const linkedList = new LinkedList();

linkedList.insertAtTail(1);
linkedList.insertAtTail(2);
linkedList.insertAtTail(3);
linkedList.insertAtHead(4);
linkedList.insertAtHead(5);

console.log(linkedList.display());
