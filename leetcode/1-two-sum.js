function twoSum(nums, target) {
  const len = nums.length;
  const myObject = {};

  for (let i = 0; i < len; i++) {
    const complement = target - nums[i];
    if (myObject.hasOwnProperty(complement)) {
      return [myObject[complement], i];
    }
    myObject[nums[i]] = i;
  }
}

console.log(twoSum([1, 2, 3, 4, 5, 6], 10));
