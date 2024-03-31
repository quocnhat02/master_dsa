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
}

const myQueue = new Queue();

console.log(myQueue.isEmpty());
console.log(myQueue.getFront());
console.log(myQueue.size());
