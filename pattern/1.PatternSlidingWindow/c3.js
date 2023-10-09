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
  const mapChar = new Map();
  let windowStart = 0;
  let max = 0;

  for (let windowEnd = 0; windowEnd < length; windowEnd++) {
    mapChar.set(str[windowEnd], (mapChar.get(str[windowEnd]) || 0) + 1);

    while (mapChar.size > k) {
      mapChar.get(str[windowStart]) === 0
        ? mapChar.set(str[windowStart], mapChar.get(str[windowStart]) - 1)
        : mapChar.delete(str[windowStart]);

      windowStart++;
    }

    max = mapChar.size <= k ? Math.max(max, windowEnd - windowStart + 1) : max;
  }

  return max;
}

console.log(findLongestSubStr('araaci', 2)); // 4
console.log(findLongestSubStr('araaci', 1)); // 2
console.log(findLongestSubStr('cbbebi', 3)); // 5
