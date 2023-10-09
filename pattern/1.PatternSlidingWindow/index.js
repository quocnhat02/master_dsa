function calcAverageOfSizeK(arr, k) {
  if (!arr || k <= 0 || arr.length < k || !Array.isArray(arr)) {
    return null;
  }

  const length = arr.length;
  const averages = [];

  for (let i = 0; i <= length - k; i++) {
    let sum = 0;
    for (let j = 0; j < i + k; j++) {
      sum += arr[j];
    }
    averages[i] = sum / k;
  }

  return averages;
}

/**
 * k = 5
 * averages = [11/5,]
 * i = 1, j = 6
 * sum = 14
 */

console.log(calcAverageOfSizeK([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));
