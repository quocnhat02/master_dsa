const { LinkedList } = require('./SSL');

class Queue {
  constructor() {
    this.items = new LinkedList();
  }

  enqueue(element) {
    this.items.insertAtTail(element);
  }

  dequeue() {
    return this.items.deleteAtHead();
  }

  getFront() {
    return this.items.head ? this.items.head.data : null;
  }

  isEmpty() {
    return this.items.isEmpty();
  }

  size() {
    return this.items.length();
  }

  display() {
    return this.items.display();
  }
}

const newQueue = new Queue();

newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
newQueue.enqueue(4);
newQueue.enqueue(5);

// console.log(newQueue.dequeue());
// console.log(newQueue.dequeue());
// console.log(newQueue.getFront());

console.log(newQueue.display());
console.log(newQueue.size());
