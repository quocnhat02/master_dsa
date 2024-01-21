function findLongestSubstring(str, k) {
  const count_chars = new Map();
  const length = str.length;
  let longest_str = 0;
  let start = 0;

  for (let end = 0; end < length; end++) {
    const elm = str.at(end);
    count_chars.set(elm, (count_chars.get(elm) || 0) + 1);

    while (count_chars.size > k) {
      const elm_start = str.at(start);
      count_chars.set(elm_start, count_chars.get(elm_start) - 1);
      if (count_chars.get(elm_start) === 0) {
        count_chars.delete(elm_start);
      }
      start++;
    }

    longest_str = Math.max(longest_str, end - start + 1);
  }

  return longest_str;
}

console.log(findLongestSubstring('araaci', 2));
console.log(findLongestSubstring('araaci', 1));
console.log(findLongestSubstring('cbbebi', 3));
