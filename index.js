function maxSumOfKArray(arr, k) {
  let sum = 0,
    max = 0,
    count = 0;

  for (let i = 0; i < arr.length - k + 1; i++) {
    sum = 0;
    count = 0;
    while (count < k) {
      sum += arr[i + count];
      count++;
    }
    if (max < sum) {
      max = sum;
    }
  }
  return max;
}

console.log(maxSumOfKArray([2, 3, 4, 1, 5], 2));
console.log(maxSumOfKArray([2, 1, 5, 1, 3, 2], 3));
