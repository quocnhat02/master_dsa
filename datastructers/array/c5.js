// Challenge 5: Find Minimum Value in Array

function findMinimum1(arr) {
  return arr.length === 0 ? null : arr.sort((a, b) => a - b)[0];
}

function findMinimum2(arr) {
  let min = arr[0];
  let i = 1,
    j = arr.length - 1;

  while (i <= j) {
    min = Math.min(min, arr[i], arr[j]);
    i++;
    j--;
  }

  return min;
}

const arr = [9, 2, 3, 6];
// 2

console.log(findMinimum1(arr));
console.log(findMinimum2(arr));
