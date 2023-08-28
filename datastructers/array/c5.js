// Challenge 5: Find Minimum Value in Array

function findMinimum1(arr) {
  return arr.sort((a, b) => a - b)[0];
}

function findMinimum2(arr) {
  let min = Number.POSITIVE_INFINITY;
  let i = 0,
    j = arr.length - 1;

  while (i <= j) {
    min = min > arr[i] || min > arr[j] ? Math.min(arr[i], arr[j]) : min;
    i++;
    j--;
  }

  return min;
}

const arr = [9, 2, 3, 6];

// console.log(findMinimum1(arr));
console.log(findMinimum2(arr));
