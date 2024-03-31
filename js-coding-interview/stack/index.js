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
}

const myStack = new Stack();

console.log(myStack);
