function longestSubstringWithKChar(str, k) {
  if (str.length === 0) {
    return null;
  }

  let longest = 0;
  const countChar = new Map();
  let leftChar = 0;

  for (let rightChar = 0; rightChar < str.length; rightChar++) {
    const rightElm = str[rightChar];
    countChar.set(rightElm, countChar.get(rightElm | 0) + 1);

    while (countChar.size > k) {
      const leftElm = str[leftChar];
      countChar.set(leftElm, countChar.get(leftElm) - 1);
      if (!countChar.get(leftElm)) {
        countChar.delete(leftElm);
      }
      leftChar++;
    }

    longest = Math.max(longest, rightChar - leftChar + 1);
  }

  return longest;
}

console.log(longestSubstringWithKChar('abaaaccaaaaa', 2));
