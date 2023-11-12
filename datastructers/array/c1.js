// Challenge 1: Remove Even Integers From an Array

function removeEven(numbers) {
  return numbers.filter((number) => number % 2 !== 0);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(removeEven(numbers));
