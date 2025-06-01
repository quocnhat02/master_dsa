function findMaxLengthAtMostKDistinctChars(s, k) {
  const mapChar = new Map();
  let left = 0,
    maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    const rightChar = s.charAt(right);
    mapChar.set(rightChar, (mapChar.get(rightChar) || 0) + 1);

    while (mapChar.size > k) {
      const leftChar = s.charAt(left);
      mapChar.set(leftChar, mapChar.get(leftChar) - 1);

      if (mapChar.get(leftChar) === 0) mapChar.delete(leftChar);
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

console.log(findMaxLengthAtMostKDistinctChars('eceba', 2)); // Output: 3 ("ece")
