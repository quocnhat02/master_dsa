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

  findNthFromEnd(n) {
    if (n > this.length || n <= 0) {
      return -1;
    }
    return this.findIndex(this.length - n + 1);
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
    const foundNodeBeforeTail = this.findIndex(this.length - 1);
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

  removeDuplicates() {
    const setNode = new Set();
    const newLinkList = new LinkList();
    let element = this.head;

    while (element !== null) {
      if (setNode.has(element.data)) {
        element = element.nextElement;
      } else {
        setNode.add(element.data);
        newLinkList.insertTail(element.data);
        element = element.nextElement;
      }
    }

    return newLinkList;
  }
}

function union(list1, list2) {
  const setNode = new Set();
  let element1 = list1.head;

  while (element1 !== null) {
    setNode.add(element1.data);
    element1 = element1.nextElement;
  }

  let element2 = list2.head;
  while (element2 !== null) {
    if (setNode.has(element2.data)) {
      element2 = element2.nextElement;
    } else {
      setNode.add(element2.data);
      list1.insertTail(element2.data);
      element2 = element2.nextElement;
    }
  }

  return list1;
}

function intersection(list1, list2) {
  const result = new LinkList();
  const setNode = new Set();
  let element1 = list1.head;

  while (element1 !== null) {
    setNode.add(element1.data);
    element1 = element1.nextElement;
  }

  let element2 = list2.head;
  while (element2 !== null) {
    if (setNode.has(element2.data)) {
      result.insertTail(element2.data);
    } else {
      setNode.add(element2.data);
    }
    element2 = element2.nextElement;
  }

  return result;
}

// const link_list = new LinkList();
const link_list1 = new LinkList();
const link_list2 = new LinkList();

// link_list.insertHead(1);
// link_list.insertHead(2);
// link_list.insertHead(3);
// link_list.insertTail(1);
// link_list.insertTail(2);
// link_list.insertTail(3);
// link_list.insertTail(4);
// link_list.insertTail(4);
// link_list.insertIndex(3, 5);
// link_list.deleteHead();
// link_list.deleteTail();
// link_list.deleteNode(10);

// console.log(link_list.display());
// console.log(JSON.stringify(link_list.reverse()));
// console.log(link_list.head);
// console.log(link_list.tail);
// console.log(link_list.findIndex(3));
// console.log(link_list.findBeforeNode(2));
// console.log(link_list.detectLoop());
// console.log(link_list.findMid().data);
// console.log(link_list.length);
// console.log(JSON.stringify(link_list.removeDuplicates()));

link_list1.insertTail(10);
link_list1.insertTail(20);
link_list1.insertTail(80);
link_list1.insertTail(60);
// link_list2.insertTail(15);
// link_list2.insertTail(20);
// link_list2.insertTail(30);
// link_list2.insertTail(60);
// link_list2.insertTail(45);

// console.log(JSON.stringify(union(link_list1, link_list2)));
// console.log(JSON.stringify(intersection(link_list1, link_list2)));
console.log(JSON.stringify(link_list1.findNthFromEnd(1)));
