function findMinSubarraySequence(arr, s) {
  let sum = 0,
    start = 0,
    min = arr.length + 1;

  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];

    while (sum >= s) {
      min = Math.min(min, end - start + 1);

      sum -= arr[start];
      start++;
    }
  }

  return min > arr.length ? 0 : min;
}

console.log(findMinSubarraySequence([2, 1, 5, 2, 3, 2], 7));
console.log(findMinSubarraySequence([2, 1, 5, 2, 3, 2], 55));
