// You have give an array of characters where each character represents a fruit.
// You have 2 baskets, find longest number of nums.
// Each baskets can only hold a single type of fruit.

//  numMap = {}, pre_idx = 0, longest = 0, k = 2
// [01100010110] => 2

function findLongestOnes(nums, k) {
  const length = nums.length;

  let pre_idx = 0,
    longest = 0;
  const numMap = new Map();

  for (let idx = 0; idx < length; idx++) {
    const rightElm = nums[idx];
    numMap.set(rightElm, (numMap.get(rightElm) || 0) + 1);

    while (numMap.get(0) > k) {
      const leftElm = nums[pre_idx];
      numMap.set(leftElm, numMap.get(leftElm) - 1);

      pre_idx++;
    }

    longest = Math.max(longest, idx - pre_idx + 1);
  }

  return longest;
}

console.log(findLongestOnes([0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0], 2));
