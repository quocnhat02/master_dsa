// Challenge 8: Right Rotate an Array by n

function rotateRight(arr, n) {
  return arr.slice(arr.length - n).concat(arr.slice(0, arr.length - n));
}

const arr = [1, 2, 3, 4, 5];
console.log(rotateRight(arr, 3));
