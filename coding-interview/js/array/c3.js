// maximum subarray
function findMaxSubArray(numbers) {
  let max = 0;
  let sum = 0;

  for (const number of numbers) {
    sum += number;
    if (sum <= 0) {
      sum = 0;
    } else {
      max = sum > max ? sum : max;
    }
  }

  return max;
}

const numbers = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(findMaxSubArray(numbers));
console.log(findMaxSubArray([1]));
