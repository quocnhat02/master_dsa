class Node {
  constructor(data) {
    this.data = data;
    this.nextElement = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head === null;
  }

  display() {
    let element = this.head;
    let string = '';
    while (element !== null) {
      string += `${element.data} -> `;
      element = element.nextElement;
    }

    return string + 'null';
  }

  insertHead(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const head = this.head;
      newNode.nextElement = head;
      this.head = newNode;
    }
  }

  insertTail(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextElement = newNode;
      this.tail = newNode;
    }
  }
}

const link_list = new LinkList();

// link_list.insertHead(1);
// link_list.insertHead(2);
// link_list.insertHead(3);
link_list.insertTail(1);
link_list.insertTail(2);
link_list.insertTail(3);

console.log(link_list.display());
console.log(link_list.head);
console.log(link_list.tail);
