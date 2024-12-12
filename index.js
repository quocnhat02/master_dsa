function twoSum(nums, target) {
  if (nums.length < 1 || target == undefined) {
    return null;
  }
  const numMap = new Map();

  for (let idx = 0; idx < nums.length; idx++) {
    const result = target - nums[idx];

    if (numMap.has(result)) return [numMap.get(result), idx];
    numMap.set(nums[idx], idx);
  }

  return null;
}

let nums = [3, 3],
  target = 6;

console.log(twoSum(nums, target));
