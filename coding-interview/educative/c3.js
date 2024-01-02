// Longest Substring with K Distinct Characters (medium)

function findLongestKChar(str, k) {
  let longest = 0;
  let start = 0;
  const hash = new Map();

  for (let end = 0; end < str.length; end++) {
    hash.set(str[end], (hash.get(str[end]) || 0) + 1);
    while (hash.size > k && start <= end) {
      hash.set(str[start], hash.get(str[start]) - 1);
      if (hash.get(str[start]) === 0) {
        hash.delete(str[start]);
      }
      start++;
    }

    longest = Math.max(longest, end - start + 1);
  }

  return longest;
}

console.log(findLongestKChar('araaci', 2));
console.log(findLongestKChar('araaci', 1));
console.log(findLongestKChar('cbbebi', 3));
