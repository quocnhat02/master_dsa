// Challenge 7: Find Second Maximum Value in an Array

function findSecondMaximum1(arr) {
  return arr.sort((a, b) => a - b)[arr.length - 2];
}

function findSecondMaximum2(arr) {
  let max = Number.NEGATIVE_INFINITY,
    secondMax = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      secondMax = max;
      max = arr[i];
    } else if (secondMax < arr[i] && arr[i] !== max) {
      secondMax = arr[i];
    }
  }

  return secondMax;
}

function findSecondMaximum3(arr) {
  let i = 0,
    j = arr.length - 1;
  let max = Number.NEGATIVE_INFINITY,
    secondMax = Number.NEGATIVE_INFINITY;

  while (i < j) {
    if (arr[i] > arr[j]) {
      if (max < arr[i]) {
        secondMax = max;
        max = arr[i];
      }
    }

    if (arr[j] > secondMax) {
      secondMax = arr[j];
    }

    i++;
    j--;
  }

  return secondMax;
}

const arr = [9, 2, 3, 6, 7];

// console.log(findSecondMaximum1(arr));
console.log(findSecondMaximum2(arr));
console.log(findSecondMaximum3(arr));
