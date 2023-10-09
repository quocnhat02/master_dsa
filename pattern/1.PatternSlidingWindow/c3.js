// Longest Substring with K Distinct Characters (medium)

/*
    Given a string, find the length of the longest substring 
    in it with no more than K distinct characters.

    Input: String="araaci", K=2
    Output: 4
    Explanation: The longest substring with no more than '2' 
                distinct characters is "araa".
*/

function findLongestSubStr(str, k) {
  if (!str || str.length <= 0 || typeof str !== 'string') {
    return 0;
  }

  const length = str.length;
  const charCount = new Map();
  let windowStart = 0;
  let max = 0;

  for (let windowEnd = 0; windowEnd < length; windowEnd++) {
    const rightChar = str[windowEnd];
    charCount.set(rightChar, (charCount.get(rightChar) || 0) + 1);

    while (charCount.size > k) {
      const leftChar = str[windowStart];
      charCount.set(leftChar, charCount.get(leftChar) - 1);
      if (charCount.get(leftChar) === 0) {
        charCount.delete(leftChar);
      }

      windowStart++;
    }

    max = Math.max(max, windowEnd - windowStart + 1);
  }

  return max;
}

console.log(findLongestSubStr('araaci', 2)); // 4
console.log(findLongestSubStr('araaci', 1)); // 2
console.log(findLongestSubStr('cbbebi', 3)); // 5
