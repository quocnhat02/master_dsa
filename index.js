function longestSubstringWithoutRepeat(s) {
  const charMap = new Set();

  let left = 0,
    longest = 0;

  for (let idx = 0; idx < s.length; idx++) {
    while (charMap.has(s.charAt(idx))) {
      charMap.delete(s.charAt(left));
      left++;
    }
    charMap.add(s.charAt(idx));

    longest = Math.max(longest, idx - left + 1);
  }

  return longest;
}

console.log(longestSubstringWithoutRepeat('abcabcbb'));
console.log(longestSubstringWithoutRepeat('cabcdef'));
