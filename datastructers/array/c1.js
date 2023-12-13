// Challenge 1: Remove Even Integers From an Array

function removeEven(arr) {
  return arr.filter((num) => num % 2 !== 0);
}

console.log(removeEven([1, 2, 4, 5, 10, 6, 3]));
