// Maximum Sum Subarray of Size K (easy)

function findMaxSum(arr, k) {
  let max = arr[0];
  let start = 0;
  let sum = 0;

  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];
    if (end >= k - 1) {
      max = Math.max(max, sum);
      sum -= arr[start++];
    }
  }

  return max;
}

console.log(findMaxSum([2, 1, 5, 1, 3, 2], 3));
console.log(findMaxSum([2, 3, 4, 1, 5], 2));
