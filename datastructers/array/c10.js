// Challenge 10: Rearrange Sorted Array in Max/Min Form
function rearrange_sorted_max_min(array) {
  const length = array.length;
  const rearrange_max_min = [];
  let idx_max = length - 1;
  let idx_min = 0;

  while (idx_min < idx_max) {
    rearrange_max_min.push(array[idx_max--]);
    rearrange_max_min.push(array[idx_min++]);
  }

  if (length % 2 !== 0) {
    rearrange_max_min.push(array[idx_min++]);
  }

  return rearrange_max_min;
}

// [1,2,3,4,5] -> [5,1,4,2,3]

console.log(rearrange_sorted_max_min([1, 2, 3, 4, 5]));
