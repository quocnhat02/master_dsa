function binarySearch(arr, n, t, l = 0, r = n - 1) {
  let m = Number.parseInt((l + r) / 2);
  if (arr[m] === t) {
    return m;
  } else if (arr[m] > t) {
    return binarySearch(arr, n, t, 0, m - 1);
  } else if (arr[m] < t) {
    return binarySearch(arr, n, t, m + 1, n);
  } else {
    return -1;
  }
}

function swap(a, b) {
  let temp = a;
  a = b;
  b = temp;
}

function sortArray(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        swap(arr[i], arr[j]);
      }
    }
  }
}

let arr = [-5, 2, 4, 6, 10];
console.log(binarySearch(arr, arr.length, 10, 0, arr.length - 1));
console.log(binarySearch(arr, arr.length, 6, 0, arr.length - 1));
console.log(binarySearch(arr, arr.length, 20, 0, arr.length - 1));
