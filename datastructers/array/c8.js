// Challenge 8: Right Rotate an Array by n

function rightRotate(numbers, n) {
  return numbers.splice(numbers.length - n).concat(numbers);
}

const arr = [1, 2, 3, 4, 5];
const n = 3;

console.log(rightRotate(arr, n));
