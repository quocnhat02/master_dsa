// Longest Substring with K Distinct Characters (medium)

/*
Example 1:
Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".

Example 2:
Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".
*/

function findLongestStrWithK(str, k) {
  const charCount = new Map();
  let longest = 0;
  let left = 0;

  for (let right = 0; right < str.length; right++) {
    const curChar = str.at(right);
    charCount.set(curChar, (charCount.get(curChar) || 0) + 1);
    while (charCount.size > k && left <= right) {
      const valueLeft = str.at(left);
      charCount.set(valueLeft, charCount.get(valueLeft) - 1);
      if (charCount.get(valueLeft) === 0) charCount.delete(valueLeft);
      left++;
    }

    longest = Math.max(longest, right - left + 1);
  }

  return longest;
}

console.log(findLongestStrWithK('araaci', 2));
console.log(findLongestStrWithK('araaci', 1));
