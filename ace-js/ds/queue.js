class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(element) {
    return this.data.push(element);
  }

  dequeue() {
    return this.data.shift();
  }

  getFront() {
    return this.data[0] ?? null;
  }

  isEmpty() {
    return !this.data.length ? true : false;
  }

  size() {
    return this.data.length;
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();

console.log(queue);
