function sumSubarraySizeK(arr, k) {
  if (arr.length < k) {
    return null;
  }
  let maxSum = 0,
    currentSum = 0;

  for (let idx = 0; idx < k; idx++) {
    currentSum += arr[idx];
  }

  maxSum = currentSum;

  for (let idx = k; idx < arr.length; idx++) {
    currentSum = currentSum + arr[idx] - arr[idx - k];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

console.log(sumSubarraySizeK([2, 1, 5, 1, 3, 2], 3));
