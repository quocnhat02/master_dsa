function findMaxLength(arr) {
  const len = arr.length;

  if (len <= 1) {
    return 0;
  }

  const numMap = new Map();
  numMap.set(0, -1);

  let count = 0,
    maxLen = 0;

  for (let idx = 0; idx < len; idx++) {
    count += arr[idx] === 0 ? -1 : 1;

    if (numMap.has(count)) {
      maxLen = Math.max(maxLen, idx - numMap.get(count));
    } else {
      numMap.set(count, idx);
    }
  }

  return maxLen;
}

// Ví dụ sử dụng:
console.log(findMaxLength([0, 1])); // Đầu ra: 2
console.log(findMaxLength([0, 1, 0])); // Đầu ra: 2
console.log(findMaxLength([0, 1, 0, 0, 1, 1, 0])); // Đầu ra: 6
