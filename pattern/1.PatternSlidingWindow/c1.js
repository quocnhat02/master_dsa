// Maximum Sum Subarray of Size K (easy)

/* 
    Given an array of positive numbers and a positive number 'k', 
    find the maximum sum of any contiguous subarray of size ‘k’.
    Input: [2, 1, 5, 1, 3, 2], k=3 
    Output: 9
*/

function findMaxSubArray(arr, k) {
  if (!arr || k <= 0 || arr.length < k || !Array.isArray(arr)) {
    return null;
  }

  const length = arr.length;
  let max = arr[0];
  let windowStart = 0;
  let windowSum = 0;

  for (let windowEnd = 0; windowEnd < length; windowEnd++) {
    windowSum += arr[windowEnd];
    if (windowEnd >= k - 1) {
      if (windowSum > max) {
        max = windowSum;
      }
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  return max;
}

console.log(findMaxSubArray([2, 1, 5, 1, 3, 2], 3));
console.log(findMaxSubArray([2, 3, 4, 1, 5], 2));
