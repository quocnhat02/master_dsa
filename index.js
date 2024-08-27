function findSubarrayWithKDistance(arr, k) {
  return atMostK(arr, k) - atMostK(arr, k - 1);
}

function atMostK(arr, k) {
  const len = arr.length;
  if (!len) {
    return 0;
  }

  let start = 0,
    res = 0;
  const numMap = new Map();

  for (let end = 0; end < len; end++) {
    numMap.set(arr[end], (numMap.get(arr[end]) || 0) + 1);

    while (numMap.size > k && start < end) {
      numMap.set(arr[start], numMap.get(arr[start]) - 1);
      if (numMap.get(arr[start]) === 0) numMap.delete(arr[start]);
      start++;
    }

    res += end - start + 1;
  }

  return res;
}

// PT(X) = 1 + 2 + ... + (X - 1) + X
// PT(X-1) = 1 + 2 + ... + (X - 1)

// Ví dụ sử dụng:
console.log(findSubarrayWithKDistance([1, 2, 1, 2, 3], 2)); // Đầu ra: 7
console.log(findSubarrayWithKDistance([1, 2, 1, 3, 4], 3)); // Đầu ra: 3
console.log(findSubarrayWithKDistance([1, 2, 3, 4], 3)); // Đầu ra: 2
