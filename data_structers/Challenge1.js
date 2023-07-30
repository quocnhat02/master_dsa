// Challenge 1: Remove Even Integers From an Array

// I: [1,2,4,5,10,6,3]
// O: [1,5,3]

function removeEven1(arr) {
  let oddArray = [];
  for (let number of arr) {
    if (number % 2 !== 0) {
      oddArray.push(number);
    }
  }

  return oddArray;
}

function removeEven2(arr) {
  return arr.filter((num) => num % 2 !== 0);
}

let arr = [1, 2, 4, 5, 10, 6, 3];

console.log(removeEven1(arr));
console.log(removeEven2(arr));
