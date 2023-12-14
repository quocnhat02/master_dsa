// Maximum Sum Subarray of Size K (easy)

/*
Example 1:
Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].

Example 2:
Input: [2, 3, 4, 1, 5], k=2 
Output: 7
Explanation: Subarray with maximum sum is [3, 4].
 */

// TODO:
function findMaxSumSubArr(array, k) {
  let max = array[0];
  let sum = 0;
  let start = 0;

  for (let end = 0; end < array.length; end++) {
    sum += array[end];
    if (end >= k - 1) {
      max = Math.max(max, sum);
      sum -= array[start++];
    }
  }

  return max;
}

const arr1 = [2, 1, 5, 1, 3, 2],
  k1 = 3;
const arr2 = [2, 3, 4, 1, 5],
  k2 = 2;

console.log(findMaxSumSubArr(arr1, k1));
console.log(findMaxSumSubArr(arr2, k2));
