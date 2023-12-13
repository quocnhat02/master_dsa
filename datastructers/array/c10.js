// Challenge 10: Rearrange Sorted Array in Max/Min Form

function reSortedMaxMin(arr) {
  const rearrange = [];
  const n = arr.length;

  for (let i = 0, j = n - 1; i <= j; i++, j--) {
    rearrange.push(arr[j]);
    if (i !== j) {
      rearrange.push(arr[i]);
    }
  }

  return rearrange;
}

console.log(reSortedMaxMin([1, 2, 3, 4, 5, 6, 7]));
