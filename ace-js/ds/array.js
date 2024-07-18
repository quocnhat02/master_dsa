function findMaxSumSub(arr) {
  let max_sum = arr[0],
    sum = arr[0];

  for (let idx = 0; idx < arr.length; idx++) {
    if (sum < 0) {
      sum = arr[idx];
    } else {
      sum += arr[idx];
    }

    max_sum = Math.max(max_sum, sum);
  }

  return max_sum;
}

console.log(findMaxSumSub([-4, 2, -5, 1, 2, 3, 6, -5, 1]));
