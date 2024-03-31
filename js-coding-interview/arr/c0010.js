// Challenge: Find Minimum Value in Array

function findMin(arr) {
  return arr.reduce((acc, cur) => Math.min(acc, cur), arr[0]);
}
function rightRotate(arr, n) {
  return arr.splice(arr.length - n).concat(arr.splice(0, arr.length));
}
console.log(findMin([9, 2, 3, 6]));
console.log(rightRotate([1, 2, 3, 4, 5], 3));
