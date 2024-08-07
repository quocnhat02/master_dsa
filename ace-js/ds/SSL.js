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

    if (head == this.tail) {
      result += head ? head.data + ' -> ' : '';
    } else {
      while (head !== null) {
        result += head.data + ' -> ';
        head = head.next;
      }
    }
    result += null;

    return result;
  }

  isEmpty() {
    return !this.head ? true : false;
  }

  length() {
    if (this.isEmpty()) {
      return 0;
    } else {
      let length = 0;
      let currentNode = this.head;
      while (currentNode !== null) {
        length++;
        currentNode = currentNode.next;
      }
      return length;
    }
  }

  search(data) {
    let currentNode = this.head;
    if (!currentNode) {
      return null;
    } else {
      while (currentNode !== null) {
        if (currentNode.data === data) {
          return currentNode;
        }
        currentNode = currentNode.next;
      }

      return null;
    }
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

  insertAtHead(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  insertAtNthNode(data, n) {
    let currentNode = this.head;
    let idx = 1;

    while (currentNode !== null) {
      if (idx === n) {
        const newNode = new Node(data);
        newNode.next = currentNode.next;
        if (currentNode.next === null) {
          this.tail = newNode;
        }
        currentNode.next = newNode;
      }
      idx++;
      currentNode = currentNode.next;
    }
  }

  deleteAtHead() {
    let node = null;
    if (this.head == this.tail) {
      node = this.head;
      this.head = null;
      this.tail = null;
    } else {
      node = this.head;
      this.head = this.head.next;
    }
    return node !== null ? node.data : null;
  }

  deleteAtTail() {
    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let currentNode = this.head;
      let prevNode = this.head;
      while (currentNode.next !== null) {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
      prevNode.next = null;
      this.tail = prevNode;
    }
    return true;
  }

  delete(data) {
    let flag = false;
    if (!this.head) {
      flag = false;
    } else if (this.head.data === data) {
      return this.deleteAtHead();
    } else if (this.tail.data === data) {
      return this.deleteAtTail();
    } else {
      let currentNode = this.head;
      let prevNode = this.head;
      while (currentNode !== null) {
        if (currentNode.data === data) {
          prevNode.next = currentNode.next;
          if (currentNode.next === null) {
            this.tail = prevNode;
          }
          flag = true;
        }
        prevNode = currentNode;
        currentNode = currentNode.next;
      }

      return flag;
    }
  }

  removeDuplicates() {
    const map = new Set();
    let currentNode = this.head;
    let prevNode = this.head;

    while (currentNode !== null) {
      if (map.has(currentNode.data)) {
        prevNode.next = currentNode.next;
      } else {
        map.add(currentNode.data);
        prevNode = currentNode;
      }
      currentNode = currentNode.next;
    }
  }
}

function union(list1, list2) {
  const set = new Set();
  const union = new LinkedList();

  let currentNode1 = list1.head;

  while (currentNode1 !== null) {
    set.add(currentNode1.data);
    currentNode1 = currentNode1.next;
  }

  let currentNode2 = list2.head;
  while (currentNode2 !== null) {
    if (!set.has(currentNode2.data)) {
      union.insertAtTail(currentNode2.data);
    }
    currentNode1 = currentNode1.next;
  }

  return union;
}

function intersection(list1, list2) {
  const set = new Set();
  const intersection = new LinkedList();

  let currentNode1 = list1.head;

  while (currentNode1 !== null) {
    set.add(currentNode1.data);
    currentNode1 = currentNode1.next;
  }

  let currentNode2 = list2.head;
  while (currentNode2 !== null) {
    if (set.has(currentNode2.data)) {
      intersection.insertAtTail(currentNode2.data);
    }
    currentNode1 = currentNode1.next;
  }

  return intersection;
}

// const newLinkedList = new LinkedList();
// newLinkedList.insertAtTail(7);
// newLinkedList.insertAtTail(14);
// newLinkedList.insertAtTail(21);
// newLinkedList.insertAtTail(14);
// newLinkedList.insertAtTail(14);
// newLinkedList.insertAtTail(22);
// newLinkedList.insertAtTail(7);

// console.log(newLinkedList.display());
// newLinkedList.removeDuplicates();
// console.log(newLinkedList.display());
// console.log(newLinkedList.length());

module.exports = {
  Node,
  LinkedList,
};
