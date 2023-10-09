function findAverageOfSizeK(arr, k) {
  if (!arr || k <= 0 || arr.length < k || !Array.isArray(arr)) {
    return null;
  }

  const length = arr.length;
  const averages = [];
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < length; windowEnd++) {
    windowSum += arr[windowEnd];
    if (windowEnd >= k - 1) {
      averages[windowStart] = windowSum / k;
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  return averages;
}

/**
 * k = 5
 * averages = [11/5,]
 * i = 1, j = 6
 * sum = 14
 */

console.log(findAverageOfSizeK([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));
