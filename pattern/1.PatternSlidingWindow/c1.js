function findSumSequence(arr, k) {
  let sum = 0,
    max = 0,
    start = 0;

  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];

    if (end >= k - 1) {
      max = Math.max(max, sum);
      sum -= arr[start];
      start++;
    }
  }

  return max;
}

console.log(findSumSequence([2, 1, 5, 1, 3, 2], 3));
console.log(findSumSequence([2, 3, 4, 1, 5], 2));
