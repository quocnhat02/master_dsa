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

  insertAtTail(data) {
    const newNode = new Node(data);
    if (this.isEmpty) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode = newNode;
    }
  }
}

const linked_list = new LinkedList();
console.log(linked_list.isEmpty());

linked_list.insertAtTail(1);
console.log(linked_list.isEmpty());
console.log(linked_list);
