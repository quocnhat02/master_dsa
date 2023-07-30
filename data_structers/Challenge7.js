// Challenge 7: Find Second Maximum Value in an Array

// Sample Input #
// [9,2,3,6]
// Sample Output #
// 6

function findSecondMaximum1(arr) {
  return arr.sort((a, b) => a - b)[arr.length - 2];
}

function findSecondMaximum2(arr) {
  let max = Number.NEGATIVE_INFINITY;
  let secondMax = Number.NEGATIVE_INFINITY;

  for (const val of arr) {
    if (val > max) {
      secondMax = max;
      max = val;
    } else if (val > secondMax && val !== max) {
      secondMax = val;
    }
  }

  return secondMax;
}

let arr = [9, 2, 3, 6];

console.log(findSecondMaximum1(arr));
console.log(findSecondMaximum2(arr));
