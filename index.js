// Given an array of positive numbers and a positive number S,
// find the length of the smallest contiguous subarray whose sum is greater than or equal to S

// arr= [1, 2, 3, 4, 2, 5, 3], s = 5-> 1
// pre_idx = 0, sum = 0, smallest = 0

function findLengthOfSmallestGreaterS(nums, s) {
  const length = nums.length

  if (length < 1) {
    return 0;
  }

  let pre_idx = 0, sum = 0, smallest = length;
  

  for (let idx = 0; idx < length; idx++) {
    sum += nums[idx]
    while (sum >= s) {
      smallest = Math.min(smallest, idx - pre_idx + 1)
      sum -= nums[pre_idx++]
    }
  }

  return smallest;

}

console.log(findLengthOfSmallestGreaterS([1, 2, 3, 4, 2, 5, 3], 5));
