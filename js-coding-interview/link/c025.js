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

  display() {
    let currentNode = this.head;
    let result = '';

    while (currentNode.next) {
      result += currentNode.data + ' -> ';
      currentNode = currentNode.next;
    }

    result += currentNode.data;

    return result;
  }

  isEmpty() {
    return !this.head;
  }

  calcLength() {
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  insertAtTail(data) {
    const newNode = new Node(data);
    const checkIsEmpty = this.isEmpty();
    if (checkIsEmpty) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  insertAtHead(data) {
    const newNode = new Node(data);
    const checkIsEmpty = this.isEmpty();
    if (checkIsEmpty) {
      this.head = newNode;
    } else {
      const headNode = this.head;
      newNode.next = headNode;
      this.head = newNode;
    }
  }

  searchNode(value) {
    const checkIsEmpty = this.isEmpty();
    if (checkIsEmpty) {
      return false;
    }

    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === value) {
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;
  }

  deleteAtHead() {
    const checkIsEmpty = this.isEmpty();
    if (checkIsEmpty) {
      return;
    }

    let currentNode = this.head;
    this.head = currentNode.next;
    currentNode.next = null;
  }
}

const linked_list = new LinkedList();

linked_list.insertAtTail(1);
linked_list.insertAtTail(2);
linked_list.insertAtTail(3);
linked_list.insertAtHead(4);
linked_list.deleteAtHead();
console.log(linked_list.display());
console.log(linked_list.searchNode(3));
