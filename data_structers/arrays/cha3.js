// Challenge 3: Find Two Numbers that Add up to "value"

function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

function findTwoSum1(arr, target) {
  if (arr.length < 2) {
    return null;
  }

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    const found = binarySearch(arr, target - arr[i]);

    if (found !== -1 && found !== i) {
      return [arr[i], arr[found]];
    }
  }

  return null;
}

function findTwoSum2(arr, target) {
  if (arr.length < 2) {
    return null;
  }

  arr.sort((a, b) => a - b);

  let i = 0,
    j = arr.length - 1;

  while (i < j) {
    const sum = arr[i] + arr[j];
    if (sum === target) {
      return [arr[i], arr[j]];
    } else if (sum > target) {
      j--;
    } else {
      i++;
    }
  }

  return null;
}

function findTwoSum3(arr, target) {
  if (arr.length < 2) {
    return null;
  }

  const numMaps = {};

  for (let i = 0; i < arr.length; i++) {
    if (!numMaps[arr[i]]) {
      numMaps[arr[i]] = i;
    }

    const numToFound = target - arr[i];

    if (numMaps[numToFound]) {
      return [numToFound, arr[i]];
    }
  }

  return null;
}

const arr = [1, 2, 3, 6, 5, 9];

console.log(findTwoSum1(arr, 9));
console.log(findTwoSum2(arr, 9));
console.log(findTwoSum3(arr, 9));
