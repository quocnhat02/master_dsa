// Maximum Sum Subarray of Size K (easy)
// function max_sum_subarray_of_size_k(array, k) {
//   let sum = 0,
//     windowStart = 0,
//     windowEnd = 0,
//     max = 0;

//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//     windowEnd++;
//     if (windowEnd >= k) {
//       max = sum > max ? sum : max;
//       sum -= array[windowStart];
//       windowStart++;
//     }
//   }

//   return max;
// }

function max_sum_subarray_of_size_k(array, k) {
  let sum = 0;
  let start = 0;
  let max = 0;

  for (let end = 0; end < array.length; end++) {
    sum += array[end];

    if (end - start === k - 1) {
      if (sum > max) {
        max = sum;
      }

      sum -= array[start];
      start++;
    }
  }

  return max;
}

let array = [2, 1, 5, 1, 3, 2];
let k = 3;

let array2 = [2, 3, 4, 1, 5];
let k2 = 2;

console.log(max_sum_subarray_of_size_k(array, k));
console.log(max_sum_subarray_of_size_k(array2, k2));
