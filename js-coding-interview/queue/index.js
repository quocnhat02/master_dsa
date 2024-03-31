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
}

const myQueue = new Queue();

console.log(myQueue.getFront());
