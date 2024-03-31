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

  insertAtHead(data) {}
}

const linked_list = new LinkedList();
console.log(linked_list.isEmpty());

linked_list.insertAtTail(1);
linked_list.insertAtTail(2);
linked_list.insertAtTail(3);
console.log(linked_list);
