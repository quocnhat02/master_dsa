function longestNonDuplicatesSubstring(str) {
  if (str.length === 0) {
    return null;
  }

  let longest = 0;
  const setChar = new Set();
  let leftChar = 0;

  for (let rightChar = 0; rightChar < str.length; rightChar++) {
    const rightElm = str[rightChar];

    while (setChar.has(rightElm)) {
      const leftElm = str[leftChar];
      setChar.delete(leftElm);
      leftChar++;
    }

    setChar.add(rightElm);

    longest = Math.max(longest, rightChar - leftChar + 1);
  }

  return longest;
}

console.log(longestNonDuplicatesSubstring('abcbdef'));
