function findSubarrayWithSum(arr, k) {
  const len = arr.length;

  if (len === 0) {
    return null;
  }

  let startWindow = 0;
  let windowSum = 0;

  for (let endWindow = 0; endWindow < len; endWindow++) {
    const element = arr[endWindow];
    windowSum += element;

    while (windowSum > k && endWindow > startWindow) {
      windowSum -= arr[startWindow];

      startWindow++;
    }

    if (windowSum === k) {
      return arr.slice(startWindow, endWindow + 1);
    }
  }

  return null;
}

console.log(findSubarrayWithSum([1, 4, 20, 3, 10, 5], 33)); // Đầu ra: [20, 3, 10]
console.log(findSubarrayWithSum([1, 2, 3, 4, 5], 9)); // Đầu ra: [2, 3, 4]
console.log(findSubarrayWithSum([1, 2, 3, 4, 5], 20)); // Đầu ra: null
