// Smallest Subarray with a given sum (easy)

/*
Example 1:
Input: [2, 1, 5, 2, 3, 2], S=7 
Output: 2
Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].

Example 2:
Input: [2, 1, 5, 2, 8], S=7 
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].
*/

// TODO:
function findMinSubArr(array, s) {
  let min = array.length;
  let sum = 0;
  let start = 0;

  for (let end = 0; end < array.length; end++) {
    sum += array[end];

    while (sum >= s && start <= end) {
      min = Math.min(min, end - start + 1);
      sum -= array[start++];
    }
  }

  return min;
}

console.log(findMinSubArr([2, 1, 5, 2, 3, 2], 7));
console.log(findMinSubArr([2, 1, 5, 2, 8], 7));
