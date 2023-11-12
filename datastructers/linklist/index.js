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
    this.length = 0;
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
    this.length++;
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
    this.length++;
  }

  findIndex(index) {
    let element = this.head;
    let count = 1;

    while (count < index) {
      element = element.nextElement;
      count++;
    }

    return element;
  }

  insertIndex(index, data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else if (index <= 0) {
      this.insertHead(data);
    } else if (index > this.length) {
      this.insertTail(data);
    } else {
      const findNode = this.findIndex(index);
      newNode.nextElement = findNode.nextElement;
      findNode.nextElement = newNode;
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
link_list.insertTail(4);
link_list.insertIndex(3, 5);

console.log(link_list.display());
// console.log(link_list.head);
// console.log(link_list.tail);
// console.log(link_list.findIndex(3));
