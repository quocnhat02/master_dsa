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
      result = head ? head.data : null;
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
    let flag = true;
    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      flag = true;
      this.head = this.head.next;
    }
    return flag;
  }

  delete(data) {
    let flag = false;
    if (!this.head) {
      flag = false;
    } else if (this.head.data == data) {
      return this.deleteAtHead();
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
}

const newLinkedList = new LinkedList();
newLinkedList.insertAtTail(1);
newLinkedList.insertAtTail(2);
newLinkedList.insertAtTail(3);
newLinkedList.insertAtTail(4);
newLinkedList.insertAtTail(5);
newLinkedList.insertAtNthNode(9, 3);

console.log(newLinkedList.display());
