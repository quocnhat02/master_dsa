// Challenge 2: Merge Two Sorted Arrays
function merge_sorted(f_array, s_array) {
  const length_f_array = f_array.length;
  const length_s_array = s_array.length;
  const total_length = length_f_array + length_s_array;
  const merged = new Array(total_length);
  let idx_f_array = 0;
  let idx_s_array = 0;
  let idx_merged = 0;

  while (idx_f_array + idx_s_array < total_length) {
    if (f_array[idx_f_array] < s_array[idx_s_array] || !s_array[idx_s_array]) {
      merged[idx_merged] = f_array[idx_f_array];
      idx_merged++;
      ++idx_f_array;
    } else {
      merged[idx_merged] = s_array[idx_s_array];
      idx_merged++;
      ++idx_s_array;
    }
  }

  return merged;
}

// [1,3,5,7,9]
// [2,4,6,8]
// [1,2,3,4,5,6,7,8,9]

console.log(merge_sorted([1, 3, 5, 7, 9], [2, 4, 6, 8]));
