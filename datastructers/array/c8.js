// Challenge 8: Right Rotate an Array by n

function rightRotate1(arr, n) {
  return arr.slice(-n).concat(arr.slice(0, -n));
}

function rightRotate2(arr, n) {
  let rotate = [];

  for (let i = arr.length - n; i <= arr.length; i++) {
    if (i === arr.length - n - 1) {
      rotate.push(arr[i]);
      break;
    }
    if (i === arr.length) {
      i = 0;
    }
    rotate.push(arr[i]);
  }

  return rotate;
}

const arr = [1, 2, 3, 4, 5];
const n = 3;
// arr = [3,4,5,1,2]

console.log(rightRotate1(arr, n));
console.log(rightRotate2(arr, n));
