function findShortestSubstringWithSumAtLeastK(arr, k) {
  const len = arr.length;

  if (!len) return 0;

  let start = 0,
    sum = 0,
    shortest = len + 1;

  for (let end = 0; end < len; end++) {
    sum += arr[end];

    while (sum >= k && start <= end) {
      shortest = Math.min(shortest, end - start + 1);

      sum -= arr[start];
      start++;
    }
  }

  return shortest === len + 1 ? -1 : shortest;
}

// Ví dụ sử dụng:
console.log(findShortestSubstringWithSumAtLeastK([1, 2, 3, 4, 5], 11)); // Đầu ra: 3
console.log(findShortestSubstringWithSumAtLeastK([2, -1, 2], 3)); // Đầu ra: 3
console.log(findShortestSubstringWithSumAtLeastK([1, 1, 1, 1], 4)); // Đầu ra: 4
