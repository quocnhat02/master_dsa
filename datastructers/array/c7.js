// Challenge 7: Find Second Maximum Value in an Array

function findSecondMaximum1(arr) {
  return arr.sort((a, b) => a - b)[arr.length - 2];
}

function findSecondMaximum2(arr) {
  let max = Number.NEGATIVE_INFINITY;
  let secondMax = max;

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (secondMax < arr[i] && max !== arr[i]) {
      secondMax = arr[i];
    }
  }

  return secondMax ?? null;
}

function findSecondMaximum3(arr) {
  let max = Number.NEGATIVE_INFINITY;
  let secondMax = max;

  for (const num of arr) {
    if (max < num) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && num !== max) {
      secondMax = num;
    }
  }

  return secondMax ?? null;
}

const arr = [9, 2, 3, 6];

// console.log(findSecondMaximum1(arr));
// console.log(findSecondMaximum2(arr));
console.log(findSecondMaximum3(arr));
