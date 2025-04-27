// You have give an array of characters where each character represents a fruit.
// You have 2 baskets, find max number of str.
// Each baskets can only hold a single type of fruit.

//  charMap = {}, pre_idx = 0, max = 0
// 'abcdbaeaad' => 'abcd'

function findLongestLengthWithoutRepeat(str) {
  const length = str.length;

  let pre_idx = 0,
    max = 0;
  const charMap = new Map();

  for (let idx = 0; idx < length; idx++) {
    const rightChar = str.charAt(idx);

    while (charMap.has(rightChar)) {
      const leftChar = str.charAt(pre_idx);
      charMap.set(leftChar, charMap.get(leftChar) - 1);

      if (charMap.get(leftChar) === 0) {
        charMap.delete(leftChar);
      }
      pre_idx++;
    }

    charMap.set(rightChar, (charMap.get(rightChar) || 0) + 1);

    max = Math.max(max, idx - pre_idx + 1);
  }

  return max;
}

console.log(findLongestLengthWithoutRepeat('abcdbaeaad'));
