// Longest Subarray with Ones after Replacement (hard)

/*
    Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
    Output: 6
    Explanation: Replace the '0' at index 5 and 8 to have the 
    longest contiguous subarray of 1s having length 6.
*/

function lengthOfLongestSub(arr, k) {
  if (!arr || arr.length <= 0 || k < 0 || !Array.isArray(arr)) {
    return 0;
  }

  const length = arr.length;
  const bitCount = new Map();
  let maxLength = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < length; windowEnd++) {
    const bitRight = arr[windowEnd];
    bitCount.set(bitRight, (bitCount.get(bitRight) || 0) + 1);

    if (bitRight !== arr[windowStart]) {
      while (bitCount.size > 1 && bitCount.get(bitRight) > k) {
        const bitLeft = arr[windowStart];
        bitCount.set(bitLeft, bitCount.get(bitLeft) - 1);
        if (bitCount.get(bitLeft) === 0) {
          bitCount.delete(bitLeft);
        }
        windowStart++;
      }
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSub([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2)); // 6
console.log(lengthOfLongestSub([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3)); // 9
