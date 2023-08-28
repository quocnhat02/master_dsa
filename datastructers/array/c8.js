// Challenge 8: Right Rotate an Array by n

function rightRotate(arr, n) {
  return arr.splice(arr.length - n).concat(arr.splice(0, arr.length));
}

const arr = [1, 2, 3, 4, 5];
const n = 3;

console.log(rightRotate(arr, n));
