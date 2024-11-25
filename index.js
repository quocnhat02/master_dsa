function find_max_sum_subarray_of_k_size(arr, k) {
  let max = 0;
  let sum = 0;

  for (let idx = 0; idx < arr.length; idx++) {
    sum += arr[idx];

    if (idx >= k - 1) {
      max = Math.max(max, sum);
      sum -= arr[idx - k + 1];
    }
  }

  return max;
}

console.log(find_max_sum_subarray_of_k_size([2, 1, 5, 1, 3, 2], 3));
