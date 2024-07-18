function rearrange(arr) {
  let idx_swap = 0;

  for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx] < 0) {
      [arr[idx], arr[idx_swap]] = [arr[idx_swap], arr[idx]];
      idx_swap++;
    }
  }

  return arr;
}

console.log(rearrange([10, -1, 20, 0, 4, 5, -9, -6]));
