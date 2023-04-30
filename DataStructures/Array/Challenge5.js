// Challenge 5: Find Minimum Value in Array

function findMinimum(arr) {
  let min = arr[0];
  for (let num of arr) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}

function findMinimum2(arr) {
  return arr.sort((a, b) => a - b)[0];
}

let arr = [9, 2, 3, 6];

console.log(findMinimum(arr));
console.log(findMinimum2(arr));
