function findLongestSubstringWithoutMoreOneOccur(s) {
  const charSet = new Set();

  let left = 0,
    longest = 0;

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }

    charSet.add(s[right]);
    longest = Math.max(longest, right - left + 1);
  }

  return longest;
}

// Ví dụ sử dụng
console.log(findLongestSubstringWithoutMoreOneOccur('abcabcbb')); // Output: 3
console.log(findLongestSubstringWithoutMoreOneOccur('bbbbb')); // Output: 1
console.log(findLongestSubstringWithoutMoreOneOccur('pwwkew')); // Output: 3
