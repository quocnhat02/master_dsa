const LinkedList = require('../link');

class Queue {
  constructor() {
    this.items = new LinkedList();
  }

  isEmpty() {
    return this.items.isEmpty();
  }

  getFront() {
    return this.items.head ? this.items.head.data : null;
  }

  size() {
    return this.items.calcLength();
  }

  enqueue(value) {
    this.items.insertAtTail(value);
  }

  dequeue() {
    return this.items.deleteAtHead();
  }

  display() {
    return this.items.display();
  }
}

const myQueue = new Queue();

// myQueue.enqueue(0);
// myQueue.enqueue(1);
// myQueue.enqueue(2);
// myQueue.enqueue(3);

console.log(myQueue.dequeue());

// console.log(myQueue.isEmpty());
// console.log(myQueue.getFront());
// console.log(myQueue.size());
console.log(myQueue.display());
