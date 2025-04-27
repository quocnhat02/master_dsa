// Given a string, find the length of the longest substring in it
// with no more than k distance characters

// charMap = {}, pre_idx = 0, longest = 0
// 'abcabaaad' => 'abaaad'
// { b: 1, c: 1}

function findLongestSubString(str, k) {
  const length = str.length;

  let pre_idx = 0,
    longest = 0;
  const charMap = new Map();

  for (let idx = 0; idx < length; idx++) {
    const rightChar = str.charAt(idx);
    charMap.set(rightChar, (charMap.get(rightChar) || 0) + 1);

    while (charMap.size > k) {
      const leftChar = str.charAt(pre_idx);
      charMap.set(leftChar, charMap.get(leftChar) - 1);

      if (charMap.get(leftChar) === 0) {
        charMap.delete(leftChar);
      }
      pre_idx++;
    }

    longest = Math.max(longest, idx - pre_idx + 1);
  }
  console.log(charMap);

  return longest;
}

console.log(findLongestSubString('abcabaaad', 2));
