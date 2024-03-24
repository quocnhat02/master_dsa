function searchLinear(array, target) {
  for (let idx = 0; idx < array.length; idx++) {
    if (array[idx] === target) return idx;
  }
  return -1;
}

console.log(searchLinear([5, 1, 9, 2, 7], 9));
