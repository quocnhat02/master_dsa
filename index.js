function findMissingNumber(array, n) {
  if (n === 0) {
    return null;
  }

  const sum = array.reduce((a, b) => a + b, 0);
  const total = (n * (n + 1)) / 2;

  return total - sum;
}

console.log(findMissingNumber([1, 2, 3, 4, 5, 7], 7));
