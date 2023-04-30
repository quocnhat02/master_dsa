// Challenge 7: Find Second Maximum Value in an Array

function findSecondMaximum(arr) {
  return arr.sort((a, b) => a - b)[arr.length - 2];
}

let arr = [9, 2, 3, 6];

console.log(findSecondMaximum(arr));
