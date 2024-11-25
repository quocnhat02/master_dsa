function find_average_size_k(arr, k) {
  // Array with all elements with average of k size
  let result = [];

  let sum = 0;

  for (let idx = 0; idx < arr.length; idx++) {
    sum += arr[idx];

    if (idx >= k - 1) {
      const avg = sum / k;
      result.push(avg);
      sum -= arr[idx - k + 1];
    }
  }

  return result;
}

console.log(find_average_size_k([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));
