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
    return this.head === null ? true : false;
  }

  display() {
    let result = '';
    let currentNode = this.head;

    while (currentNode.next !== null) {
      result += currentNode.data + ' -> ';
      currentNode = currentNode.next;
    }

    result += currentNode.data;

    return result;
  }

  insertAtTail(data) {
    const newNode = new Node(data);
    const checkEmpty = this.isEmpty();

    if (checkEmpty) {
      this.head = newNode;
    } else {
      let currentNode = this.head;

      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }

    return newNode;
  }

  insertAtHead(data) {
    const newNode = new Node(data);
    const checkEmpty = this.isEmpty();

    if (checkEmpty) {
      this.head = newNode;
    } else {
      const headNode = this.head;
      newNode.next = headNode;
      this.head = newNode;
    }

    return newNode;
  }

  delete(data) {
    const checkEmpty = this.isEmpty();

    if (checkEmpty) {
      return null;
    }

    let currentNode = this.head,
      prevNode = currentNode;

    if (currentNode.data === data) {
      this.deleteAtHead();
    }

    while (currentNode !== null) {
      if (currentNode.data === data) {
        prevNode.next = currentNode.next;
        return data;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    return data;
  }

  deleteAtHead() {
    const checkEmpty = this.isEmpty();

    if (checkEmpty) {
      return null;
    }

    const headNode = this.head;
    this.head = headNode.next;
    return headNode;
  }

  search(data) {
    const checkEmpty = this.isEmpty();

    if (checkEmpty) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.data === data) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  length() {
    const checkEmpty = this.isEmpty();
    let length = 0;

    if (checkEmpty) {
      return length;
    }

    let currentNode = this.head;

    while (currentNode !== null) {
      length++;
      currentNode = currentNode.next;
    }

    return length;
  }

  removeDuplicates() {
    const checkEmpty = this.isEmpty();

    if (checkEmpty) {
      return;
    }

    const nodeSet = new Set();

    let currentNode = this.head,
      prevNode = currentNode;

    while (currentNode !== null) {
      if (!nodeSet.has(currentNode.data)) {
        nodeSet.add(currentNode.data);
        prevNode = currentNode;
        currentNode = currentNode.next;
      } else {
        prevNode.next = currentNode.next;
        currentNode = currentNode.next;
      }
    }
  }
}

function union(list1, list2) {
  const checkEmpty1 = list1.isEmpty();
  const checkEmpty2 = list2.isEmpty();

  if (checkEmpty1) {
    return list2;
  }

  if (checkEmpty2) {
    return list1;
  }

  const nodeSet = new Set();

  let currentNode1 = list1.head;

  while (currentNode1.next !== null) {
    nodeSet.add(currentNode1.data);
    currentNode1 = currentNode1.next;
  }
  nodeSet.add(currentNode1.data);

  let currentNode2 = list2.head;

  while (currentNode2 !== null) {
    if (!nodeSet.has(currentNode2.data)) {
      currentNode1.next = currentNode2;
      currentNode1 = currentNode2;
    }
    currentNode2 = currentNode2.next;
  }

  currentNode1.next = null;

  return list1.display();
}

const linkedList = new LinkedList();

linkedList.insertAtTail(1);
linkedList.insertAtTail(2);
linkedList.insertAtTail(3);
linkedList.insertAtTail(4);
linkedList.insertAtTail(5);

const linkedList2 = new LinkedList();

linkedList2.insertAtTail(6);
linkedList2.insertAtTail(7);
linkedList2.insertAtTail(4);
linkedList2.insertAtTail(5);
linkedList2.insertAtTail(9);

// console.log(linkedList.display());

console.log(union(linkedList, linkedList2));
