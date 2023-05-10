// Smallest Subarray with a given sum (easy)

// function smallest_subarray_with_a_given_sum(array, s) {
//   let sum = 0,
//     windowStart = 0,
//     windowEnd = 0,
//     small = array.length;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//     windowEnd++;
//     console.log('windEnd: ', array[i]);
//     if (sum >= s) {
//       small =
//         small > windowEnd - 1 - windowStart
//           ? windowEnd - 1 - windowStart
//           : small;
//       console.log('small1:', small);

//       sum -= array[windowStart];
//       console.log('sum:', sum);
//       windowStart++;
//     }
//   }

//   return small;
// }

function smallest_subarray_with_a_given_sum(array, s) {
  let min = array.length;
  let start = 0;
  let sum = 0;

  for (let end = 0; end < array.length; end++) {
    sum += array[end];

    while (sum >= s) {
      if (end - start + 1 < min) {
        min = end - start + 1;
      }

      sum -= array[start];
      start++;
    }
  }

  return min;
}

let array = [2, 1, 5, 2, 3, 2];
let s = 7;

let array2 = [2, 1, 5, 2, 8];
let s2 = 7;

console.log('small', smallest_subarray_with_a_given_sum(array, s));
console.log('small', smallest_subarray_with_a_given_sum(array2, s2));
