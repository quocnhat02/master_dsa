function findMaxSumSubarrayWithK(arr, k) {
  const len = arr.length;

  if (len < k) return null;

  let sum = 0;

  for (let idx = 0; idx < k; idx++) {
    sum += arr[idx];
  }

  let maxSum = sum;

  for (let end = k; end < len; end++) {
    sum += arr[end] - arr[end - k];

    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}

// Ví dụ sử dụng:
console.log(findMaxSumSubarrayWithK([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // Đầu ra: 39
console.log(findMaxSumSubarrayWithK([100, 200, 300, 400], 2)); // Đầu ra: 700
console.log(findMaxSumSubarrayWithK([1, 4, 2, 10, 23, 3, 1, 0, 20], 3)); // Đầu ra: 36
