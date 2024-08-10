function findSumSubSequence(arr, k) {
  const length = arr.length;
  let currentSum = 0;
  let startWindow = 0;
  let maxSum = arr[0];

  for (let endWindow = 0; endWindow < length; endWindow++) {
    currentSum += arr[endWindow];

    if (endWindow - startWindow >= k - 1) {
      maxSum = Math.max(maxSum, currentSum);
      currentSum -= arr[startWindow];
      startWindow++;
    }
  }

  return maxSum;
}

console.log(findSumSubSequence([1, 2, 3, 4, 5], 3));
