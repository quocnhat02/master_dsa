function findSum1(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === value) {
        return [arr[i], arr[j]];
      }
    }
  }

  return false;
}

function binarySearch(arr, item) {
  let l = 0,
    r = arr.length - 1,
    index = 0,
    found = false,
    mid;

  while (l <= r && !found) {
    mid = Math.floor((l + r) / 2);

    if (arr[mid] === item) {
      index = mid;
      found = true;
    } else if (arr[mid > item]) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  if (found) {
    return index;
  } else {
    return false;
  }
}

function findSum2(arr, value) {
  arr.sort(function (a, b) {
    return a - b;
  });

  let index;
  for (let j = 0; j < arr.length; j++) {
    index = binarySearch(arr, value - arr[j]);
    if (index != false && j != index) {
      return [arr[j], value - arr[j]];
    }
  }

  return false;
}

function findSum(arr, value) {
  arr.sort(function (a, b) {
    return a - b;
  });

  let l = 0,
    r = arr.length - 1,
    result = [],
    sum = 0;

  while (l != r) {
    sum = arr[l] + arr[r];

    if (sum < value) {
      l++;
    } else if (sum > value) {
      r--;
    } else {
      result.push(arr[l]);
      result.push(arr[r]);
      return result;
    }
  }

  return false;
}

let arr = [1, 21, 3, 14, 5, 60, 7, 6];
let value = 81;

console.log(findSum1(arr, value));
console.log(findSum2(arr, value));
console.log(findSum3(arr, value));
