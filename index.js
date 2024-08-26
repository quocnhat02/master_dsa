function findSubarrayWithSum(arr, k) {
  const len = arr.length;

  if (len === 0) {
    return null;
  }

  arr = arr.sort((a, b) => a - b);

  let startWindow = 0;
  let endWindow = len - 1;

  let windowSum = arr.reduce((prev, cur) => prev + cur, 0);

  while (startWindow <= endWindow) {
    if (windowSum === k) {
      return arr.slice(startWindow, endWindow + 1);
    } else if (windowSum - arr[endWindow] < k) {
      windowSum -= arr[startWindow];
      startWindow++;
    } else {
      windowSum -= arr[endWindow];
      endWindow--;
    }
  }

  return null;
}

console.log(findSubarrayWithSum([1, 4, 20, 3, 10, 5], 33)); // Đầu ra: [20, 3, 10]
console.log(findSubarrayWithSum([1, 2, 3, 4, 5], 9)); // Đầu ra: [2, 3, 4]
console.log(findSubarrayWithSum([1, 2, 3, 4, 5], 20)); // Đầu ra: null
