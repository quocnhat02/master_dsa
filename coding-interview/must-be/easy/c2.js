function findDuplicates(arr) {
  const numbers = arr;
  const numSet = new Set();

  for (let i = 0; i < numbers.length; i++) {
    if (numSet.has(numbers[i])) {
      return numbers[i];
    }
    numSet.add(numbers[i]);
  }

  return null;
}

const arr = [1, 2, 3, 4, 5, 2, 3];

console.log(findDuplicates(arr));
