function hasDuplicates(nums) {
  const numSet = new Set();
  const length = nums.length;

  for (let idx = 0; idx < length; idx++) {
    if (numSet.has(nums[idx])) return true;
    numSet.add(nums[idx]);
  }

  return false;
}

console.log(hasDuplicates([1, 2, 3, 3]));
console.log(hasDuplicates([1, 2, 3, 4]));
