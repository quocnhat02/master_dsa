// Smallest Subarray with a given sum (easy)

/*
    Given an array of positive numbers and a positive number ‘S’,
     find the length of the smallest contiguous subarray 
     whose sum is greater than or equal to ‘S’. Return 0, 
     if no such subarray exists.

    Input: [2, 1, 5, 2, 3, 2], S=7 
    Output: 2
    Explanation: The smallest subarray with a sum great than or equal 
    to '7' is [5, 2].
*/

function findMinWithSum(arr, s) {
  if (!arr || arr.length <= 0 || !Array.isArray(arr)) {
    return 0;
  }

  const length = arr.length;
  let min = length + 1;
  let windowStart = 0;
  let windowSum = 0;

  for (let windowEnd = 0; windowEnd < length; windowEnd++) {
    windowSum += arr[windowEnd];

    if (windowSum >= s) {
      while (windowSum >= s && windowStart <= windowEnd) {
        const lengthOfSubArray = windowEnd - windowStart + 1;
        if (lengthOfSubArray < min) {
          min = lengthOfSubArray;
        }
        windowSum -= arr[windowStart];
        windowStart++;
      }
    }
  }

  return min === length + 1 ? 0 : min;
}

console.log(findMinWithSum([2, 1, 5, 2, 3, 2], 7));
console.log(findMinWithSum([2, 1, 5, 2, 8], 7));
console.log(findMinWithSum([3, 4, 1, 1, 6], 8));
console.log(findMinWithSum([1, 3, 3], 8));
