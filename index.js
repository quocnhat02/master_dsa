function findDuplicates(arr) {
  let numCount = new Map();
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    numCount.set(arr[i], (numCount.get(arr[i]) | 0) + 1);
  }

  for (const [key, value] of numCount) {
    if (value > 1) {
      result.push(key);
    }
  }

  return result;
}

console.log(findDuplicates([1, 2, 3, 6, 3, 6, 1]));
console.log(findDuplicates([1, 2, 3, 4, 3]));
