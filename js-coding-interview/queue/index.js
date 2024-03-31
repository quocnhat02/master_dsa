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

  findBin(n) {
    if (n <= 0) {
      return null;
    }

    let result = [],
      s1,
      s2;
    this.enqueue('1');

    for (let idx = 0; idx < n; idx++) {
      result.push(this.dequeue());
      s1 = result[idx] + '0';
      s2 = result[idx] + '1';

      myQueue.enqueue(s1);
      myQueue.enqueue(s2);
    }

    return result;
  }
}

const myQueue = new Queue();

// myQueue.enqueue(0);
// myQueue.enqueue(1);
// myQueue.enqueue(2);
// myQueue.enqueue(3);

// console.log(myQueue.dequeue());

// console.log(myQueue.isEmpty());
// console.log(myQueue.getFront());
// console.log(myQueue.size());
// console.log(myQueue.display());

console.log(myQueue.findBin(7));
