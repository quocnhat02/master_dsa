// Challenge 7: Find Second Maximum Value in an Array

// function findSecondMaximum(arr) {
//   return arr.sort((a, b) => a - b)[arr.length - 2];
// }

function findSecondMaximum(arr) {
  return arr.sort((a, b) => a - b)[arr.length - 2];
}

function findSecondMaximum2(arr) {
  let max = 0;
  let secondMax = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[max] < arr[i]) {
      max = i;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[secondMax] && i !== max) {
      secondMax = i;
    }
  }

  return arr[secondMax];
}

let arr = [3, 2, 9, 6];

// console.log(findSecondMaximum(arr));
console.log(findSecondMaximum2(arr));
