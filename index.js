// T:O(n*log(n)) S:O(n)
function isUnique(str) {
  let chars = str.split('').sort();

  for (let i = 1; i < chars.length; i++) {
    if (chars[i] === chars[i - 1]) {
      return false;
    }
  }
  return true;
}

// T:O(n) S:O(n)
function flatten(nestedArray) {
  const newArray = [];

  for (let i = 0; i < nestedArray.length; i++) {
    const thisItem = nestedArray[i];

    if (Array.isArray(thisItem)) {
      const flatItem = flatten(thisItem);

      for (let j = 0; j < flatItem.length; j++) {
        newArray.push(flatItem[j]);
      }
    } else {
      newArray.push(thisItem);
    }
  }

  return newArray;
}

// T:O(n) S:O(n)
function removeDupes(str) {
  let uniqueCharacters = new Set(str);
  return Array.from(uniqueCharacters).join('');
}

// Stack
// T:Get, search: O(n), Insert,delete: O(1) S:O(n)
class Stack {
  constructor() {
    this.stack = [];
  }

  push(data) {
    this.stack.push(data);
  }

  pop() {
    return this.stack.pop();
  }

  printStack() {
    var str = '';
    for (var i = 0; i < this.stack.length; i++) {
      str += this.stack[i] + '\n';
    }
    return str;
  }
}

// Queue
// T:Get, search, delete: O(n), Insert: O(1) S:O(n)
class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(data) {
    this.queue.push(data);
  }

  dequeue() {
    return this.queue.shift();
  }

  printQueue() {
    var str = '';
    for (var i = 0; i < this.queue.length; i++) str += this.queue[i] + ' ';
    return str;
  }
}

function Node(data) {
  this.data = data;
  this.next = null;
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addNode(data) {
    const node = new Node(data);
    if (!this.head) {
      this.tail = node;
      this.head = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  insertAfter(data, toNodeData) {
    let current = this.head;
    while (current) {
      if (current.data === toNodeData) {
        const node = new Node(data);
        if (current === this.tail) {
          this.tail.next = node;
          this.tail = node;
        } else {
          node.next = current.next;
          current.next = node;
          break;
        }
      }
      current = current.next;
    }
  }

  removeNode(data) {
    let previous = this.head;
    let current = this.head;
    while (current) {
      if (current.data === data) {
        if (current === this.head) {
          this.head = this.head.next;
        }
        if (current === this.tail) {
          this.tail = previous;
        }
        previous.next = current.next;
      } else {
        previous = current;
      }
      current = current.next;
    }
  }
}

const list = new SinglyLinkedList();
list.addNode(23);
list.addNode(24);
list.insertAfter(23.5, 23);

console.log(list);
