function shortestSubarrayWithSumAtLeastK(nums, k) {
  const n = nums.length;
  let start = 0;
  let minLength = n + 1;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += nums[i];
    while (sum >= k && start <= i) {
      minLength = Math.min(minLength, i - start + 1);

      sum -= nums[start];
      start++;
    }
  }

  return minLength === n + 1 ? -1 : minLength;
}

// Ví dụ sử dụng:
console.log(shortestSubarrayWithSumAtLeastK([1, 2, 3, 4, 5], 11)); // Đầu ra: 3
console.log(shortestSubarrayWithSumAtLeastK([2, -1, 2], 3)); // Đầu ra: 3
console.log(shortestSubarrayWithSumAtLeastK([1, 1, 1, 1], 4)); // Đầu ra: 4
