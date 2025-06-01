function findMinimumSizeSumSubarray(arr, target) {
  let minSize = 0,
    left = 0,
    currentSum = 0,
    idx = 0;

  while (currentSum < target) {
    currentSum += arr[idx];
    idx++;
  }

  minSize = idx;

  while (idx < arr.length) {
    currentSum += arr[idx];

    while (currentSum >= target && idx >= left) {
      minSize = Math.min(minSize, idx - left + 1);
      currentSum -= arr[left];

      left++;
    }

    idx++;
  }

  return minSize;
}

console.log(findMinimumSizeSumSubarray([2, 3, 1, 2, 4, 3], 7));
console.log(findMinimumSizeSumSubarray([1, 2, 3, 5, 2, 7], 7));
