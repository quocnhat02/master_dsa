function findSum1(arr, value) {
  for (let i = 0; i < arr.length - 1; i++) {
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
    found = false,
    indexArr;
  while (l <= r && !found) {
    const mid = Math.floor((l + r) / 2);
    if (arr[mid] === item) {
      indexArr = mid;
      found = true;
    } else if (arr[mid] > item) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  if (found) {
    return indexArr;
  } else {
    return false;
  }
}

function findSum2(arr, value) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    let indexArr = binarySearch(arr, value - arr[i]);
    if (indexArr) {
      return [arr[i], value - arr[i]];
    }
  }

  return false;
}

function findSum3(arr, value) {
  arr.sort((a, b) => a - b);

  let l = 0,
    r = arr.length - 1;

  for (; l < r; ) {
    const sum = arr[l] + arr[r];
    if (sum < value) {
      l++;
    } else if (sum > value) {
      r--;
    } else {
      return [arr[l], arr[r]];
    }
  }

  return false;
}

let arr = [1, 21, 3, 14, 5, 60, 7, 6];
let value = 12;

console.log(findSum1(arr, value));
console.log(findSum2(arr, value));
console.log(findSum3(arr, value));
