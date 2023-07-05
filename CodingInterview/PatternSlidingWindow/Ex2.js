/*
Smallest Subarray with a given sum (easy)
Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.
Input: [2, 1, 5, 2, 3, 2], S=7 
Output: 2
Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].
*/

function findSmallSumSubArray(array, s) {
  let sum = 0;
  let start = 0;
  let min = array.length;

  for (let end = 0; end < array.length; end++) {
    sum += array[end];
    while (sum >= s) {
      if (min > end - start + 1) {
        min = end - start + 1;
      }
      sum -= array[start];
      start++;
    }
  }

  return min === array.length ? 0 : min;
}

/*
S - C - M
2 - 1 - max
3 - 2 - max
6 - 2 - 3
2 - 1 - 2
5 - 2 - 2
5 - 2 - 2
-> 2 is smallest subarray
*/

console.log(findSmallSumSubArray([2, 1, 5, 2, 3, 2], 7));
console.log(findSmallSumSubArray([2, 1, 5, 2, 8], 7));
console.log(findSmallSumSubArray([3, 4, 1, 1, 6], 8));
