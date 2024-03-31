const LinkedList = require('../link');
const Stack = require('../stack');

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

  reverse(k) {
    if (!this.isEmpty()) {
      let myStack = new Stack();
      let count = 0;
      while (count < k) {
        myStack.push(this.dequeue());
        count++;
      }
      while (myStack.isEmpty() == false) {
        this.enqueue(myStack.pop());
      }
      for (var i = 0; i < this.size() - k; i++) {
        this.enqueue(this.dequeue());
      }
      console.log(this.display());
    }
  }
}

const myQueue = new Queue();

// myQueue.enqueue(1);
// myQueue.enqueue(2);
// myQueue.enqueue(3);
// myQueue.enqueue(4);
// myQueue.enqueue(5);
// myQueue.enqueue(6);
// myQueue.enqueue(7);
// myQueue.enqueue(8);
// myQueue.enqueue(9);
// myQueue.enqueue(10);

// console.log(myQueue.dequeue());

// console.log(myQueue.isEmpty());
// console.log(myQueue.getFront());
// console.log(myQueue.size());
// console.log(myQueue.display());

// console.log(myQueue.findBin(7));

// myQueue.reverse(5);
