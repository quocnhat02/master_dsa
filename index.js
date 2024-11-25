function find_longest_no_repeat_sub_string(str) {
  const count_char = new Map();
  let idx_sub = 0;
  let longest = 0;

  for (let idx = 0; idx < str.length; idx++) {
    count_char.set(str[idx], (count_char.get(str[idx]) | 0) + 1);

    while (count_char.get(str[idx]) > 1) {
      const sub_elm = str[idx_sub];
      count_char.set(sub_elm, count_char.get(sub_elm) - 1);
      if (count_char.get(sub_elm) == 0) {
        count_char.delete(sub_elm);
      }
      idx_sub++;
    }

    longest = Math.max(longest, count_char.size);
  }

  return longest;
}

console.log(find_longest_no_repeat_sub_string('aabccbb'));
console.log(find_longest_no_repeat_sub_string('abbbb'));
console.log(find_longest_no_repeat_sub_string('abcbeaf'));
