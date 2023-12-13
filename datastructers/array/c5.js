// Challenge 5: Find Minimum Value in Array

function findMin(arr) {
  return arr.reduce((prev, cur) => Math.min(prev, cur));
}

console.log(findMin([1, 2, 3, 5]));
