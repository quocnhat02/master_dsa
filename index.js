// Given array of positive integer numbers and a positive number k,
// find the maximum sum of any contiguous subaaray of size k

// arr= [1, 2, 3, 4, 2, 5, 3], k = 2 -> 8
// idx = 0, sum = 0, max = 0

function findAverageSumSubarray(nums, k) {
  if (nums.length < k) {
    return 0;
  }

  let pre_idx = 0, sum = 0, max = 0;

  for (let idx = 0; idx < k; idx++) {
    sum += nums[idx]
  }

  max = sum / k;

  for (let idx = k; idx < nums.length; idx++) {
    sum = sum - nums[pre_idx++] + nums[idx] 
    max = Math.max(max, sum / k)
  }

  return max;

}

console.log(findAverageSumSubarray([1, 2, 3, 4, 2, 5, 3], 2));
