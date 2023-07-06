/*
Longest Substring with K Distinct Characters (medium)
Given a string, find the length of the longest substring in it with no more than K distinct characters.
Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".
*/

function findLongestSubString(str, k) {
  let start = 0;
  let max = 0;
  let characters = {};

  for (let end = 0; end < str.length; end++) {
    if (characters[str[end]]) {
      characters[str[end]]++;
    } else {
      characters[str[end]] = 1;
    }

    while (Object.keys(characters).length > k) {
      characters[str[start]]--;

      if (characters[str[start]] === 0) {
        delete characters[str[start]];
      }

      start++;
    }

    if (max < end - start - 1) {
      max = end - start - 1;
    }
  }

  return max;
}

/*
C - 
*/

console.log(findLongestSubString('araaci', 2));
console.log(findLongestSubString('araaci', 1));
console.log(findLongestSubString('cbbebi', 3));
