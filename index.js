function findLengthOfLongestSubstring(s) {
  let len = s.length;

  if (!len) return 0;

  let maxLen = 0,
    start = 0;
  const charCount = new Map();

  for (let end = 0; end < len; end++) {
    const endElement = s.charAt(end);
    charCount.set(endElement, (charCount.get(endElement) || 0) + 1);

    while (charCount.get(endElement) > 1 && end > start) {
      const startElement = s.charAt(start);
      charCount.set(startElement, charCount.get(startElement) - 1);

      if (charCount.get(startElement) === 0) {
        charCount.delete(startElement);
      }

      start++;
    }

    maxLen = Math.max(maxLen, end - start + 1);
  }

  return maxLen;
}

// Ví dụ sử dụng:
console.log(findLengthOfLongestSubstring('abcabcbb')); // Đầu ra: 3
console.log(findLengthOfLongestSubstring('bbbbb')); // Đầu ra: 1
console.log(findLengthOfLongestSubstring('pwwkew')); // Đầu ra: 3
