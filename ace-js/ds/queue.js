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

function findBin(n) {
  let result = [];
  let myQueue = new Queue();
  var s1, s2;
  myQueue.enqueue('1');
  for (var i = 0; i < n; i++) {
    result.push(myQueue.dequeue());
    s1 = result[i] + '0';
    s2 = result[i] + '1';
    myQueue.enqueue(s1);
    myQueue.enqueue(s2);
  }
  return result;
}

console.log(findBin(4));
