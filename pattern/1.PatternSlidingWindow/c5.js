function findLongestSubstringNotRepeat(str) {
  const count_chars = new Map();
  const length = str.length;
  let start = 0;
  let longest_chars = 0;

  for (let end = 0; end < length; end++) {
    const cur_char = str.at(end);
    count_chars.set(cur_char, (count_chars.get(cur_char) || 0) + 1);

    longest_chars = Math.max(longest_chars, end - start + 1);

    console.log(count_chars);
  }

  return longest_chars;
}

console.log(findLongestSubstringNotRepeat('aabccbb'));
// console.log(findLongestSubstringNotRepeat('abbbb'));
// console.log(findLongestSubstringNotRepeat('abccde'));
