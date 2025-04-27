// You have give an array of characters where each character represents a fruit.
// You have 2 baskets, find longest number of nums.
// Each baskets can only hold a single type of fruit.

//  numMap = {}, pre_idx = 0, longest = 0, k = 2
// [01100010110] => 2

function containPermutation(s1, s2) {
  const length1 = s1.length;
  const length2 = s2.length;

  if (length1 > length2) {
    return false;
  }

  let pre_idx = 0;

  for (let idx = length2 - 1; idx >= 0; idx--) {
    const rightElm = s2.charAt(idx);

    if (rightElm == s1.charAt(pre_idx)) {
      pre_idx++;
    } else if (rightElm == s1.charAt(0)) {
      pre_idx = 1;
    } else {
      pre_idx = 0;
    }

    if (pre_idx == length1) {
      return true;
    }
  }

  return false;
}

console.log(containPermutation('ab', 'eidbbcaaoaoo'));
