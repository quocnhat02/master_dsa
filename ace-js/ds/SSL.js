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

  delete(data) {
    const checkEmpty = this.isEmpty();

    if (checkEmpty) {
      return null;
    }

    let currentNode = this.head,
      prevNode = currentNode;

    if (currentNode.data === data) {
      this.deleteAtHead();
    }

    while (currentNode !== null) {
      if (currentNode.data === data) {
        prevNode.next = currentNode.next;
        return data;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    return data;
  }

  deleteAtHead() {
    const checkEmpty = this.isEmpty();

    if (checkEmpty) {
      return null;
    }

    const headNode = this.head;
    this.head = headNode.next;
    return headNode;
  }

  search(data) {
    const checkEmpty = this.isEmpty();

    if (checkEmpty) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.data === data) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  length() {
    const checkEmpty = this.isEmpty();
    let length = 0;

    if (checkEmpty) {
      return length;
    }

    let currentNode = this.head;

    while (currentNode !== null) {
      length++;
      currentNode = currentNode.next;
    }

    return length;
  }
}

const linkedList = new LinkedList();

linkedList.insertAtTail(1);
linkedList.insertAtTail(2);
linkedList.insertAtTail(3);
linkedList.insertAtHead(4);
linkedList.insertAtHead(5);

linkedList.delete(3);
linkedList.delete(5);

console.log(linkedList.display());
console.log(linkedList.search(2));
console.log(linkedList.length());
