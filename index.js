// T:O(n*log(n)) S:O(n)
function isUnique(str) {
  let chars = str.split('').sort();

  for (let i = 1; i < chars.length; i++) {
    if (chars[i] === chars[i - 1]) {
      return false;
    }
  }
  return true;
}

// T:O(n) S:O(n)
function flatten(nestedArray) {
  const newArray = [];

  for (let i = 0; i < nestedArray.length; i++) {
    const thisItem = nestedArray[i];

    if (Array.isArray(thisItem)) {
      const flatItem = flatten(thisItem);

      for (let j = 0; j < flatItem.length; j++) {
        newArray.push(flatItem[j]);
      }
    } else {
      newArray.push(thisItem);
    }
  }

  return newArray;
}

// T:O(n) S:O(n)
function removeDupes(str) {
  let uniqueCharacters = new Set(str);
  return Array.from(uniqueCharacters).join('');
}

// Stack
// T:Get, search: O(n), Insert,delete: O(n) S:O(1)
class Stack {
  constructor() {
    this.stack = [];
  }

  push(data) {
    this.stack.push(data);
  }

  pop() {
    return this.stack.pop();
  }

  printStack() {
    var str = '';
    for (var i = 0; i < this.stack.length; i++) {
      str += this.stack[i] + '\n';
    }
    return str;
  }
}

let myStack = new Stack();
myStack.push(2);
myStack.push(3);
myStack.push(9);
myStack.push(1);

myStack.pop();

console.log(myStack.printStack());
