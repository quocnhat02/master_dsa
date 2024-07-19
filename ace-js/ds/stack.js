class Stack {
  constructor() {
    this.data = [];
  }

  push(element) {
    this.data.push(element);
  }

  pop() {
    return this.data.pop();
  }

  isEmpty() {
    return !this.data.length;
  }

  getTop() {
    return this.data[this.data.length - 1];
  }
}

const newStack = new Stack();
newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.push(4);

console.log(newStack.getTop());
