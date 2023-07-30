// Challenge 3: Find Two Numbers that Add up to "value"

// Sample Input #
// arr = [1,21,3,14,5,60,7,6]
// value = 81
// Sample Output #
// arr = [21,60]

function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] === value) {
      return mid;
    } else if (arr[mid] > value) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

// O(nlogn)
function findSum1(arr, value) {
  arr.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < arr.length; i++) {
    let found = binarySearch(arr, value - arr[i]);
    if (found !== -1) {
      return [arr[i], arr[found]];
    }
  }
  return -1;
}

// O(nlog(n))
function findSum2(arr, value) {
  arr.sort(function (a, b) {
    return a - b;
  });
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let sum = arr[i] + arr[j];

    if (sum === value) {
      return [arr[i], arr[j]];
    } else if (sum > value) {
      j--;
    } else {
      i++;
    }
  }

  return -1;
}

let arr = [1, 21, 3, 14, 5, 60, 7, 6];

console.log(findSum1(arr, 81));
console.log(findSum2(arr, 81));
