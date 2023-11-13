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

  findBeforeNode(data) {
    let element = this.head;
    let count = 0;
    let hasData = false;

    while (count < this.length - 1) {
      if (element.nextElement.data === data) {
        hasData = true;
        return hasData ? element : null;
      }
      element = element.nextElement;
      count++;
    }

    return null;
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
      const foundNode = this.findIndex(index);
      newNode.nextElement = foundNode.nextElement;
      foundNode.nextElement = newNode;
    }
  }

  deleteHead() {
    if (this.isEmpty()) {
      return;
    }
    const head = this.head;
    this.head = head.nextElement;
    this.length--;
  }

  deleteTail() {
    if (this.isEmpty()) {
      return;
    }
    const foundNodeBeforeTail = this.findBeforeNode(this.tail.data);
    foundNodeBeforeTail.nextElement = null;
    this.tail = foundNodeBeforeTail;
    this.length--;
  }

  deleteNode(data) {
    if (this.isEmpty()) {
      return;
    }
    if (data === this.head.data) {
      this.deleteHead();
    }
    if (data === this.tail.data) {
      this.deleteTail();
    }
    const foundNodeBeforeData = this.findBeforeNode(data);
    if (foundNodeBeforeData !== null) {
      foundNodeBeforeData.nextElement =
        foundNodeBeforeData.nextElement.nextElement;
      this.length--;
    }
  }

  reverse() {
    const reverseLinkList = new LinkList();
    let element = this.head;
    while (element !== null) {
      reverseLinkList.insertHead(element.data);
      element = element.nextElement;
    }

    return reverseLinkList;
  }

  detectLoop() {
    if (this.length <= 1) {
      return true;
    }

    let setNode = new Set();
    let element = this.head;
    while (element !== null) {
      if (setNode.has(element.data)) {
        return false;
      }
      setNode.add(element.data);
      element = element.nextElement;
    }

    return true;
  }

  findMid() {
    if (this.length % 2 !== 0) {
      return this.findIndex(Math.ceil(this.length / 2));
    }
    return this.findIndex(this.length / 2);
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
link_list.insertTail(4);
// link_list.insertIndex(3, 5);
// link_list.deleteHead();
// link_list.deleteTail();
// link_list.deleteNode(10);

console.log(link_list.display());
// console.log(JSON.stringify(link_list.reverse()));
// console.log(link_list.head);
// console.log(link_list.tail);
// console.log(link_list.findIndex(3));
// console.log(link_list.findBeforeNode(2));
// console.log(link_list.detectLoop());
console.log(link_list.findMid().data);
// console.log(link_list.length);
