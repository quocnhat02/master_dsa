function longestSubstringAfterReplacement(s, k) {
  let start = 0;
  let maxFreq = 0;
  const charCount = {};
  let maxLength = 0;

  for (let end = 0; end < s.length; end++) {
    const endChar = s[end];
    charCount[endChar] = (charCount[endChar] || 0) + 1;
    maxFreq = Math.max(maxFreq, charCount[endChar]);

    while (end - start + 1 - maxFreq > k) {
      const startChar = s[start];
      charCount[startChar]--;
      start++;
    }

    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}

console.log(longestSubstringAfterReplacement('ABAB', 2));
console.log(longestSubstringAfterReplacement('AABABBA', 1));
