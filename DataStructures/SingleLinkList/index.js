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
}

let linkedList = new LinkedList();

linkedList.insertAtHead(1);
linkedList.insertAtHead(2);
linkedList.insertAtHead(3);

console.log(linkedList);
