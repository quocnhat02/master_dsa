const LinkList = require('../linklist');

class Queue {
  constructor() {
    this.items = new LinkList();
  }

  enqueue(element) {
    this.items.insertTail(element);
  }

  dequeue() {
    this.items.deleteHead();
    return this.isEmpty() ? null : this.items.head.data;
  }

  isEmpty() {
    return this.items.isEmpty();
  }

  getFront() {
    return this.isEmpty() ? null : this.items.head.data;
  }

  size() {
    return this.items.length;
  }
}

// class Queue {
//   constructor() {
//     this.items = [];
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }

//   getFront() {
//     return this.items[0] || null;
//   }

//   size() {
//     return this.items.length;
//   }

//   enqueue(element) {
//     this.items.push(element);
//   }

//   dequeue() {
//     return this.isEmpty() ? null : this.items.shift();
//   }
// }

const myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

myQueue.dequeue();
myQueue.dequeue();
// myQueue.dequeue();

console.log(myQueue.items.display());
console.log('isEmpty: ', myQueue.isEmpty());
console.log('size: ', myQueue.size());
