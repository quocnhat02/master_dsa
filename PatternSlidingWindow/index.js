function smallest_subarray_with_given_sum(arr, s) {
  let minLength = Infinity;
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    while (windowSum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

let arr = [2, 1, 5, 2, 3, 2];
let s = 7;

console.log(smallest_subarray_with_given_sum(arr, s));
