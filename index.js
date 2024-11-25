function find_smallest_subarray_with_sum(arr, s) {
  let small = arr.length + 1;
  let sum = 0;
  let idx_sub = 0;

  for (let idx = 0; idx < arr.length; idx++) {
    sum += arr[idx];

    while (sum >= s) {
      small = Math.min(small, idx - idx_sub + 1);
      sum -= arr[idx_sub];
      idx_sub++;
    }
  }

  return small === arr.length + 1 ? 0 : small;
}

console.log(find_smallest_subarray_with_sum([2, 1, 5, 2, 3, 2], 7));
