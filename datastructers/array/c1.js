// Challenge 1: Remove Even Integers From an Array
function removeEvenNum1(array) {
  const oddNum = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element % 2 !== 0) {
      oddNum.push(element);
    }
  }

  return oddNum;
}

function removeEvenNum2(array) {
  return array.filter((number) => number % 2 !== 0);
}

function removeEvenNum3(array) {
  return array.reduce((pre, cur) => (cur % 2 !== 0 ? [...pre, cur] : pre), []);
}

const array = [1, 2, 4, 5, 10, 6, 3]; // [1,5,3]

console.log(removeEvenNum1(array));
console.log(removeEvenNum2(array));
console.log(removeEvenNum3(array));
