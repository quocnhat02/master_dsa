// max sum subarray

function maxSubArray1(arr) {
  const length = arr.length;
  let max = arr[0];
  let windowStart = 0;
  let windowSum = 0;

  for (let windowEnd = 0; windowEnd < length; windowEnd++) {
    windowSum += arr[windowEnd];

    while (windowSum < max && windowStart < windowEnd) {
      windowSum -= arr[windowStart];
      windowStart++;
    }

    max = Math.max(max, windowSum);
  }

  return max;
}

function maxSubArray2(arr) {
  let max = 0;
  let sum = 0;

  for (const num of arr) {
    if (sum < 0) sum = 0;
    sum += num;
    max = Math.max(max, sum);
  }

  return max;
}

function maxSubArray3(arr) {
  return arr.reduce(
    (res, num) => {
      let [sum, max] = [...res];
      sum = sum + num < 0 ? 0 : sum + num;
      return [sum, Math.max(max, sum)];
    },
    [0, 0]
  )[1];
}

console.log(maxSubArray1([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray1([1]));

console.log(maxSubArray2([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray2([1]));

console.log(maxSubArray3([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray3([1]));
