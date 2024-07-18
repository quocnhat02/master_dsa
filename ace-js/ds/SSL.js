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

  display() {
    let head = this.head;
    let result = '';

    while (head.next !== null) {
      result += head.data + '->';
      head = head.next;
    }

    result += head.data;

    return result;
  }

  insertAtTail(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insertAtHead(data) {}
}

const newLinkedList = new LinkedList();
newLinkedList.insertAtTail(1);
newLinkedList.insertAtTail(2);
newLinkedList.insertAtTail(3);

console.log(newLinkedList.display());
