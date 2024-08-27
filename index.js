function findNumSubarrayProductLessThanK(arr, k) {
  const len = arr.length;

  if (!len) return 0;

  let start = 0,
    product = 1,
    numSum = 0;

  for (let end = 0; end < len; end++) {
    product *= arr[end];

    while (product >= k && end >= start) {
      product /= arr[start];
      start++;
    }

    numSum += end - start + 1;
  }

  return numSum;
}

// Ví dụ sử dụng:
console.log(findNumSubarrayProductLessThanK([10, 5, 2, 6], 100)); // Đầu ra: 8
console.log(findNumSubarrayProductLessThanK([1, 2, 3], 0)); // Đầu ra: 0
console.log(findNumSubarrayProductLessThanK([1, 1, 1], 1)); // Đầu ra: 0
