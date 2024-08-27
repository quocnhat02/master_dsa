function findSubarrayWithSum(arr, k) {
  const len = arr.length;

  if (!len) return null;

  let start = 0;
  let sum = 0;

  for (let end = 0; end < len; end++) {
    sum += arr[end];

    while (sum > k && end > start) {
      sum -= arr[start];

      start++;
    }

    if (sum === k) {
      return arr.slice(start, end + 1);
    }
  }

  return null;
}

// Ví dụ sử dụng:
console.log(findSubarrayWithSum([1, 4, 20, 3, 10, 5], 33)); // Đầu ra: [20, 3, 10]
console.log(findSubarrayWithSum([1, 2, 3, 4, 5], 9)); // Đầu ra: [2, 3, 4]
console.log(findSubarrayWithSum([1, 2, 3, 4, 5], 20)); // Đầu ra: null
