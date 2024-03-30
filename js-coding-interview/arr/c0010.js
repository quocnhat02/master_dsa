// Challenge: Find Minimum Value in Array

function findMin(arr) {
  return arr.reduce((acc, cur) => Math.min(acc, cur), arr[0]);
}

console.log(findMin([9, 2, 3, 6]));
