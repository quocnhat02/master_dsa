// Smallest Subarray with a given sum (easy)

function findMinSum(arr, s) {
  let sum = 0;
  let start = 0;
  let min = arr.length;

  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];
    while (sum >= s && end >= start) {
      min = Math.min(min, end - start + 1);
      sum -= arr[start++];
    }
  }

  return min;
}

console.log(findMinSum([2, 1, 5, 2, 3, 2], 7));
console.log(findMinSum([2, 1, 5, 2, 8], 7));
console.log(findMinSum([3, 4, 1, 1, 6], 8));
