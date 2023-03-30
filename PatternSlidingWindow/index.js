function findAverages(arr, k) {
  let result = [];
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    if (windowEnd >= k - 1) {
      result[windowStart] = windowSum / k;
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  return result;
}

let arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
let k = 5;

console.log(findAverages(arr, k));
