function binarySearch(arr, s) {
  let l = 0,
    r = arr.length - 1;
  while (l <= r) {
    let m = Math.floor((l + r) / 2);

    if (arr[m] === s) {
      return m;
    } else if (arr[m] > s) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  return undefined;
}

function findSum(arr, value) {
  arr.sort((a, b) => a - b);
  let find;
  for (let i = 0; i < arr.length; i++) {
    find = binarySearch(arr, value - arr[i]);
    if (find) {
      return [arr[i], arr[find]];
    }
  }

  return undefined;
}

function findSum2(arr, value) {
  arr.sort((a, b) => a - b);
  let i1 = 0,
    i2 = arr.length - 1,
    sum = 0;

  while (i1 !== i2) {
    sum = arr[i1] + arr[i2];
    if (sum < value) {
      i1++;
    } else if (sum > value) {
      i2--;
    } else {
      return [arr[i1], arr[i2]];
    }
  }

  return undefined;
}

let arr = [1, 21, 3, 14, 5, 60, 7, 6];
let value = 81;

// console.log(findSum(arr, value));
console.log(findSum2(arr, value));
