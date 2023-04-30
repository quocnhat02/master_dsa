// Challenge 1: Remove Even Integers From an Array

function removeEven(arr) {
  const oddArray = [];

  for (let number of arr) {
    if (number % 2 !== 0) {
      oddArray.push(number);
    }
  }

  return oddArray;
}

function removeEven2(arr) {
  return arr.filter((number) => number % 2 !== 0);
}

let arr = [1, 2, 4, 5, 10, 6, 3];

console.log(removeEven(arr));
console.log(removeEven2(arr));
