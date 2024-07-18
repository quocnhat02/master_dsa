function findMinimum(arr) {
  let min_value = arr[0];

  for (let i = 1; i < arr.length; i++) {
    min_value = Math.min(min_value, arr[i]);
  }

  return min_value;
}

console.log(findMinimum([1, 2, 3, 4]));
