// Smallest Subarray with a given sum (easy)

function findSum(array, s) {
  let min = array.length;
  let sum = 0;
  let start = 0;

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

  return min;
}

console.log(findSum([2, 1, 5, 2, 3, 2], 7)); // [5, 2]
console.log(findSum([2, 1, 5, 2, 8], 7)); // [8]
console.log(findSum([3, 4, 1, 1, 6], 8)); //  [3, 4, 1] or [1, 1, 6]
