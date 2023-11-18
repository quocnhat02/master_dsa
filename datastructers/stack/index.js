class Stack {
  constructor() {
    this.items = [];
    this.top = null;
  }

  isEmpty() {
    return this.top === null;
  }

  getTop() {
    return this.top;
  }

  size() {
    return this.items.length;
  }
}

const myStack = new Stack();

console.log('myStack: ', myStack);
console.log('isEmpty: ', myStack.isEmpty());
console.log('getTop: ', myStack.getTop());
console.log('size: ', myStack.size());
