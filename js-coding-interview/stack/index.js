class Stack {
  constructor() {
    this.items = [];
    this.top = null;
  }

  isEmpty() {
    return !this.items.length;
  }

  getTop() {
    return this.top;
  }

  size() {
    return this.items.length;
  }

  push(value) {
    this.items.push(value);
    this.top = value;
  }

  pop() {
    this.top = this.items[this.items.length - 2] || null;
    return this.items.pop();
  }
}

const myStack = new Stack();

myStack.push(3);
myStack.push(5);

myStack.pop();
myStack.pop();

console.log(myStack);
