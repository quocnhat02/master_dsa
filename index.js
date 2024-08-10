function findLongestSubStringSequence(str) {
  const charCount = new Map();

  let startWindow = 0;
  let longest = 0;

  for (let endWindow = 0; endWindow < str.length; endWindow++) {
    charCount.set(str[endWindow], (charCount.get(str[endWindow]) | 0) + 1);

    while (charCount.get(str[endWindow]) > 1 && endWindow > startWindow) {
      let element = charCount.get(str[endWindow]);
      charCount.set(str[endWindow], element - 1);

      if (element === 0) {
        charCount.delete(str[endWindow]);
      }

      startWindow++;
    }

    longest = Math.max(longest, endWindow - startWindow + 1);
  }

  return longest;
}

console.log(findLongestSubStringSequence('abcabcbb'));
