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
    this.head === null ? true : false;
  }

  insertAtHead(data) {
    if (this.isEmpty()) {
      this.head = new Node(data);
    } else {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
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

const linklist = new LinkedList();

linklist.insertAtHead(1);
linklist.insertAtHead(2);
linklist.insertAtHead(3);

linklist.print();
