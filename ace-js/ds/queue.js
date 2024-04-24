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

function findBin(n) {
  const result = [];
  const queue = new Queue();
  let s1, s2;

  queue.enqueue('1');

  for (let i = 0; i < n; i++) {
    result.push(queue.dequeue());

    s1 = result[i] + '0';
    s2 = result[i] + '1';

    queue.enqueue(s1);
    queue.enqueue(s2);
  }

  return result;
}

// const queue = new Queue();

// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.dequeue();

console.log(findBin(5));
