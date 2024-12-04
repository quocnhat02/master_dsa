function maxSumOSubarrayWithK(array, k) {
  if (array.length === 0) {
    return null;
  }

  let max = 0;
  let sum = 0;

  for (let idx = 0; idx < array.length; idx++) {
    const element = array[idx];
    sum += element;

    if (idx >= k - 1) {
      max = Math.max(max, sum);
      sum -= array[idx - k + 1];
    }
  }

  return max;
}

console.log(maxSumOSubarrayWithK([1, 3, 2, 5, 1, 2, 3], 2));
