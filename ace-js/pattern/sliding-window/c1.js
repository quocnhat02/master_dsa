function findSumSequenceWithK(arr, k) {
  let maxSub = arr[0];
  let currentSum = 0;
  let start = 0;
  let startWindow = 0;

  for (let end = 0; end < arr.length; end++) {
    currentSum += arr[end];

    if (end - start >= k - 1) {
      maxSub = Math.max(currentSum, maxSub);
      startWindow = start;
      currentSum -= arr[start];
      start++;
    }
  }

  return [maxSub, startWindow, startWindow + k - 1];
}

console.log(findSumSequenceWithK([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
