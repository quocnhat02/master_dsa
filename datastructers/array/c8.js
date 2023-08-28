// Challenge 8: Right Rotate an Array by n

function rightRotate(arr, n) {
  return arr.slice(n - 1).concat(arr.slice(0, n - 1));
}

const arr = [1, 2, 3, 4, 5];
const n = 3;

console.log(rightRotate(arr, n));
