/*
Maximum Sum Subarray of Size K (easy)
Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.
Input: [2, 1, 5, 1, 3, 2], k=3
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].
*/

function findMaxSumSubArray(array, k) {
  let start = 0;
  let sum = 0;
  let count = 0;
  let max = 0;

  for (let end = 0; end < array.length; end++) {
    sum += array[end];
    count++;
    while (count > k) {
      sum -= array[start];
      start++;
      count--;
    }
    if (max < sum) {
      max = sum;
    }
  }

  return max;
}

/*
S - C - M
2 - 1 - 2
3 - 2 - 3
8 - 3 - 8
7 - 3 - 8
9 - 3 - 9
6 - 3 - 9
-> 9 is Max
*/

console.log(findMaxSumSubArray([2, 1, 5, 1, 3, 2], 3));
console.log(findMaxSumSubArray([2, 3, 4, 1, 5], 2));
