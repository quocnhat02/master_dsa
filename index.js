function findMaxSumSubarray(arr, k) {
  const len = arr.length;

  if (len < k) {
    return null;
  }

  let windowSum = 0;

  for (let idx = 0; idx < k; idx++) {
    windowSum += arr[idx];
  }

  let maxSum = windowSum;

  for (let idx = k; idx < len; idx++) {
    windowSum += arr[idx] - arr[idx - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

const arr = [1, 2, 3, 4, 5];
const k = 3;
const result = findMaxSumSubarray(arr, k);
console.log(`Tổng lớn nhất của ${k} phần tử liên tiếp là: ${result}`);
