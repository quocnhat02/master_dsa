function interpolationSearch(arr, l, r, x) {
  let pos;
  if (l <= r && x >= arr[l] && x <= arr[r]) {
    pos = l + Math.floor(((r - l) / (arr[r] - arr[l])) * (x - arr[l]));

    if (arr[pos] === x) {
      return pos;
    }

    if (arr[pos] < x) {
      return interpolationSearch(arr, pos + 1, r, x);
    }

    if (arr[pos] > x) {
      return interpolationSearch(arr, l, pos - 1, x);
    }
  }
  return -1;
}

let arr = [10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47];

let n = arr.length;

console.log(interpolationSearch(arr, 0, n - 1, 12));
