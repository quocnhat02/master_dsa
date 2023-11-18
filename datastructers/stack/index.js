class Stack {
  constructor() {
    this.items = [];
    this.top = null;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  getTop() {
    return this.top;
  }

  size() {
    return this.items.length;
  }

  push(element) {
    this.items.push(element);
    this.top = element;
  }

  pop() {
    if (!this.isEmpty()) {
      this.top = this.items[this.items.length - 2] || null;
    }
    return this.items.pop();
  }
}

const myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);

// console.log('pop: ', myStack.pop());

console.log('myStack: ', myStack);
console.log('isEmpty: ', myStack.isEmpty());
console.log('getTop: ', myStack.getTop());
console.log('size: ', myStack.size());
