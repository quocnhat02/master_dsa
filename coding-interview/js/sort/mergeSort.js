// merge sort

function merge(arr, start, mid, end) {
  let result = [];
  let i = start,
    j = mid + 1;
  while (i <= mid && j <= end) {
    if (arr[i] <= arr[j]) {
      result.push(arr[i]);
      i++;
    } else {
      result.push(arr[j]);
      j++;
    }
  }

  while (i <= mid) {
    result.push(arr[i]);
    i++;
  }

  while (j <= end) {
    result.push(arr[j]);
    j++;
  }

  for (let i = 0; i < result.length; i++) {
    arr[start + i] = result[i];
  }
}

function mergeSort(arr) {
  return mergeSortHelper(arr, 0, arr.length - 1);
}

function mergeSortHelper(arr, start, end) {
  if (start < end) {
    const mid = Math.floor((start + end) / 2);
    mergeSortHelper(arr, start, mid);
    mergeSortHelper(arr, mid + 1, end);
    merge(arr, start, mid, end);
  }

  return arr;
}

const numbers = [5, 3, 8, 6, 19, 1, 0, 14];

console.log(mergeSort(numbers));
