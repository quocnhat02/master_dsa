// Challenge 6: Find First Unique Integer in an Array

// Sample Input #
// [9,2,3,2,6,6]
// Sample Output #
// 9

function findFirstUnique1(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 0;
    }
    obj[arr[i]]++;
  }

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === 1) {
      return arr[i];
    }
  }

  return -1;
}

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

function findFirstUnique2(arr) {
  for (let i = 0; i < arr.length; i++) {
    const found = binarySearch(arr, arr[i]);
    if (found === -1) {
      return arr[i];
    }
  }

  return -1;
}

let arr = [9, 2, 3, 2, 6, 6];

console.log(findFirstUnique1(arr));
console.log(findFirstUnique2(arr));
