// Challenge 8: Right Rotate an Array by n

function rightRotate(arr, n) {
  return arr.splice(arr.length - n).concat(arr.splice(0));
}

let arr = [1, 2, 3, 4, 5];
let n = 3;

console.log(rightRotate(arr, n));
