// quick sort
function partition(arr, start, end) {
  const pivot = arr[end];
  let f = start;
  for (let c = start; c < end; c++) {
    if (arr[c] <= pivot) {
      const temp = arr[f];
      arr[f] = arr[c];
      arr[c] = temp;
      f++;
    }
  }
  const temp = arr[f];
  arr[f] = pivot;
  arr[end] = temp;
  return f;
}

function quickSort(arr) {
  quickSortHelper(arr, 0, arr.length - 1);
}

function quickSortHelper(arr, start, end) {
  if (start < end) {
    const partitionIndex = partition(arr, start, end);
    quickSortHelper(arr, start, partitionIndex - 1);
    quickSortHelper(arr, partitionIndex + 1, end);
  }
}

const arr = [4, 2, 6, 8, 7, 5, 1, 3];

quickSort(arr);

console.log(arr);
