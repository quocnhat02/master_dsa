// Maximum Sum Subarray of Size K (easy)

function findSum(array, k) {
  let max = 0;
  let start = 0;
  let sum = 0;

  for (let end = 0; end < array.length; end++) {
    sum += array[end];

    if (end - start > k - 1) {
      sum -= array[start];
      start++;
    }

    if (max < sum) {
      max = sum;
    }
  }

  return max;
}

console.log(findSum([2, 1, 5, 1, 3, 2], 3)); // [5, 1, 3]
console.log(findSum([2, 3, 4, 1, 5], 2)); // [3, 4]
