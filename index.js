function find_longest_substring_with_k_distinct_chars(str, k) {
  const count_char = new Map();
  let longest = 0;
  let idx_sub = 0;

  for (let idx = 0; idx < str.length; idx++) {
    count_char.set(str[idx], (count_char.get(str[idx]) || 0) + 1);

    while (count_char.size > k) {
      count_char.set(str[idx_sub], count_char.get(str[idx_sub]) - 1);
      if (count_char.get(str[idx_sub]) == 0) {
        count_char.delete(str[idx_sub]);
      }
      idx_sub++;
    }

    longest =
      count_char.size == k ? Math.max(longest, idx - idx_sub + 1) : longest;
  }

  return longest;
}

console.log(find_longest_substring_with_k_distinct_chars('araaci', 2));
console.log(find_longest_substring_with_k_distinct_chars('araaci', 1));
console.log(find_longest_substring_with_k_distinct_chars('cbbebi', 3));
