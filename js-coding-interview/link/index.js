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

  deleteAtTail() {
    const checkIsEmpty = this.isEmpty();
    if (checkIsEmpty) {
      return;
    }

    let currentNode = this.head;
    if (!currentNode.next) {
      this.deleteAtHead();
      return;
    }

    let prevNode = currentNode;
    while (currentNode.next) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    prevNode.next = null;
  }

  deleteNode(value) {
    const checkIsEmpty = this.isEmpty();
    if (checkIsEmpty) {
      return;
    }

    let currentNode = this.head;
    if (currentNode.data === value) {
      this.deleteAtHead();
      return;
    }

    let prevNode = currentNode;
    while (currentNode) {
      if (currentNode.data === value) {
        prevNode.next = currentNode.next;
        currentNode.next = null;
        return;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  removeDuplicates() {
    const checkIsEmpty = this.isEmpty();
    if (checkIsEmpty) {
      return;
    }

    let currentNode = this.head;
    const countValue = new Map();

    while (currentNode) {
      countValue.set(
        currentNode.data,
        (countValue.get(currentNode.data) || 0) + 1
      );
      currentNode = currentNode.next;
    }

    let prevNode = this.head;
    currentNode = this.head;

    while (currentNode) {
      if (countValue.get(currentNode.data) >= 1) {
        prevNode = currentNode;
        countValue.set(currentNode.data, 0);
      } else {
        prevNode.next = currentNode.next;
      }
      currentNode = currentNode.next;
    }
  }
}

const linked_list = new LinkedList();

linked_list.insertAtTail(7);
linked_list.insertAtTail(14);
linked_list.insertAtTail(21);
linked_list.insertAtTail(14);
linked_list.insertAtTail(22);
linked_list.insertAtTail(7);
linked_list.removeDuplicates();

console.log(linked_list.display());
