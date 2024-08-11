function find_no_repeat_substring(str) {
  const countChar = new Map();
  let start = 0,
    longest = 0;

  for (let end = 0; end < str.length; end++) {
    const elmEnd = str.charAt(end);
    countChar.set(elmEnd, (countChar.get(elmEnd) | 0) + 1);

    while (countChar.get(elmEnd) > 1 && end > start) {
      const elmStart = str.charAt(start);
      countChar.set(elmStart, countChar.get(elmStart) - 1);

      if (!countChar.get(elmStart)) {
        countChar.delete(elmStart);
      }

      start++;
    }

    longest = Math.max(longest, end - start + 1);
  }

  return longest;
}

console.log(find_no_repeat_substring('aabccbb'));
console.log(find_no_repeat_substring('abbbb'));
console.log(find_no_repeat_substring('abccde'));
