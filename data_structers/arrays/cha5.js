// Challenge 5: Find Minimum Value in Array

function findMinimum1(arr) {
  return arr.sort((a, b) => a - b)[0];
}

function findMinimum2(arr) {
  let i = 0,
    j = arr.length - 1,
    min = Number.POSITIVE_INFINITY;

  while (i < j) {
    if (arr[i] < arr[j]) {
      if (min > arr[i]) {
        min = arr[i];
      }
      i++;
      j--;
    } else {
      if (min > arr[j]) {
        min = arr[j];
      }
      i++;
      j--;
    }
  }

  return min;
}

const arr = [5, 1, 8, 16, 7, 12, 10];

console.log(findMinimum1(arr));
console.log(findMinimum2(arr));
