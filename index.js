function linearSearch(array, target) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === target) {
      return index;
    }
  }
  return -1;
}

// console.log(linearSearch([1, 2, 3, 4, 5], 6));

function largestNumber(array) {
  let max = array[0];

  for (let index = 1; index < array.length; index++) {
    if (max < array[index]) {
      max = array[index];
    }
  }

  return max;
}

// console.log(largestNumber([1, 2, 5, 8, 7]));

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((right + left) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

// console.log(binarySearch([2, 4, 6, 8, 10], 10));

function reverseArray(array) {
  let reversedArray = [];
  for (let index = array.length - 1; index >= 0; index--) {
    reversedArray.push(array[index]);
  }
  return reversedArray;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
