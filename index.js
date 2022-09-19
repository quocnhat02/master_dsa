function binarySearch(
  arr,
  target,
  left = 0,
  right = arr.length - 1,
  mid = Math.floor((left + right) / 2)
) {
  const start = performance.now();
  do {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      console.log(performance.now() - start);
      return mid;
    }
    if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  } while (left <= right);
  console.log(performance.now() - start);

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
