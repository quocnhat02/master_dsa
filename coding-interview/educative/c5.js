// No-repeat Substring (hard)

function findNoRepeat(str) {
  let length = str.length;
  const chars = new Map();
  let start = 0;
  let longest = 0;

  for (let end = 0; end < length; end++) {
    const e_end = str[end];
    chars.set(e_end, (chars.get(e_end) || 0) + 1);

    while (chars.get(e_end) > 1 && end >= start) {
      const e_start = str[start];
      chars.set(e_start, chars.get(e_start) - 1);
      if (!chars.get(e_start)) {
        chars.delete(e_start);
      }
      start++;
    }

    longest = Math.max(longest, end - start + 1);
  }

  return longest;
}

console.log(findNoRepeat('aabccbb'));
console.log(findNoRepeat('abbbb'));
console.log(findNoRepeat('abccde'));
