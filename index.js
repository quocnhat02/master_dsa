function find_longest_sub_string_with_no_more_k_chars(str, k) {
  const countChar = new Map();
  let start = 0,
    longest = 0;

  for (let end = 0; end < str.length; end++) {
    const elmEnd = str.charAt(end);
    countChar.set(elmEnd, (countChar.get(elmEnd) | 0) + 1);

    while (countChar.size > k && end - start) {
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

console.log(find_longest_sub_string_with_no_more_k_chars('araaci', 2));
console.log(find_longest_sub_string_with_no_more_k_chars('araaci', 1));
console.log(find_longest_sub_string_with_no_more_k_chars('cbbebi', 3));
