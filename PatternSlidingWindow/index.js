function max_sub_array_of_size_k(arr, k) {
  let maxSum = 0;
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  return maxSum;
}

let arr = [2, 3, 4, 1, 5];
let k = 2;

console.log(max_sub_array_of_size_k(arr, k));
