// function interpolationSearch(arr, l, r, x) {
//   let pos;
//   if (l <= r && x >= arr[l] && x <= arr[r]) {
//     pos = l + Math.floor(((r - l) / (arr[r] - arr[l])) * (x - arr[l]));

//     if (arr[pos] === x) {
//       return pos;
//     }

//     if (arr[pos] < x) {
//       return interpolationSearch(arr, pos + 1, r, x);
//     }

//     if (arr[pos] > x) {
//       return interpolationSearch(arr, l, pos - 1, x);
//     }
//   }
//   return -1;
// }

function binarySearch(arr, l, r, x) {
  if (r >= l) {
    let mid = l + (r - l) / 2;

    if (arr[mid] == x) {
      return mid;
    }

    if (arr[mid] > x) {
      return binarySearch(arr, l, mid - 1, x);
    } else {
      return binarySearch(arr, mid + 1, r, x);
    }
  }

  return -1;
}

function exponentialSearch(arr, n, x) {
  if (arr[0] === x) {
    return 0;
  }
  let i = 1;
  while (i < n && arr[i] <= x) {
    i *= 2;
  }

  return binarySearch(arr, i / 2, Math.min(i, n - 1), x);
}

let arr = [10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47];

let n = arr.length;

console.log(exponentialSearch(arr, n, 16));
