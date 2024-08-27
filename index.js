function findLongestSubstringWithKDistinct(s, k) {
  const len = s.length;

  if (!len) return 0;

  let start = 0,
    longest = 0;
  const charMap = new Map();

  for (let end = 0; end < len; end++) {
    const endElm = s[end];
    charMap.set(endElm, (charMap.get(endElm) || 0) + 1);

    while (charMap.size > k && end > start) {
      const startElm = s[start];
      charMap.set(startElm, charMap.get(startElm) - 1);

      if (charMap.get(startElm) === 0) {
        charMap.delete(startElm);
      }

      start++;
    }

    longest = Math.max(longest, end - start + 1);
  }

  return longest;
}

// Ví dụ sử dụng:
console.log(findLongestSubstringWithKDistinct('aabacbebebe', 3)); // Đầu ra: 7
console.log(findLongestSubstringWithKDistinct('aaaa', 1)); // Đầu ra: 4
console.log(findLongestSubstringWithKDistinct('eceba', 2)); // Đầu ra: 3
