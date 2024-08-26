function findLengthOfLongestSubstring(s) {
  const len = s.length;

  if (len === 0) {
    return 0;
  }

  const countChar = new Map();
  let result = 0;
  let startWindow = 0;

  for (let endWindow = 0; endWindow < len; endWindow++) {
    const element = s.charAt(endWindow);
    countChar.set(element, (countChar.get(element) | 0) + 1);

    while (countChar.get(element) > 1) {
      const leftWindow = s.charAt(startWindow);
      countChar.set(leftWindow, countChar.get(leftWindow) - 1);

      if (!countChar.get(leftWindow)) {
        countChar.delete(leftWindow);
      }

      startWindow++;
    }

    result = Math.max(result, endWindow - startWindow + 1);
  }

  return result;
}

console.log(findLengthOfLongestSubstring('abcabcbb')); // Đầu ra: 3
console.log(findLengthOfLongestSubstring('bbbbb')); // Đầu ra: 1
console.log(findLengthOfLongestSubstring('pwwkew')); // Đầu ra: 3
