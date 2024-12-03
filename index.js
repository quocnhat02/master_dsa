function findMax(array) {
  if (array.length === 0) {
    return null;
  }

  let max = array[0];

  for (let idx = 1; idx < array.length; idx++) {
    max = Math.max(max, array[idx]);
  }

  return max;
}

console.log(findMax([1, 2, 3, 4, 5, 6]));
