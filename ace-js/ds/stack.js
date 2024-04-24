class Stack {
  constructor() {
    this.data = [];
  }

  push(element) {
    return this.data.push(element);
  }

  pop() {
    return this.data.pop();
  }

  isEmpty() {
    return !this.data.length ? true : false;
  }

  getTop() {
    return this.data[this.data.length - 1];
  }
}
