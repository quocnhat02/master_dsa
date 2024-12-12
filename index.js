function lengthOfLongestSubStrWithoutRepeat(s) {
  if (s.length == 0) {
    return 0;
  }
  const charMap = new Set();
  let longest = 0;
  let sub_idx = 0;

  for (let idx = 0; idx < s.length; idx++) {
    const element = s[idx];
    while (charMap.has(element)) {
      charMap.delete(s[sub_idx]);
      sub_idx++;
    }
    charMap.add(element);
    longest = Math.max(longest, idx - sub_idx + 1);
  }

  return longest;
}

// 'abcbdaf' -> 'cbdaf' : 5
console.log(lengthOfLongestSubStrWithoutRepeat('abcbdaf'));
console.log(lengthOfLongestSubStrWithoutRepeat('bbbbb'));
