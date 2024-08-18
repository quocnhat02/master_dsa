function findTwoSum(arr, target) {
  const length = arr.length;
  if (length < 2) {
    return 'No';
  }
  const numSet = new Set();

  numSet.add(arr[0]);

  for (let idx = 1; idx < length; idx++) {
    if (numSet.has(target - arr[idx])) {
      return 'Yes';
    }
    numSet.add(arr[idx]);
  }

  return 'No';
}

console.log(findTwoSum([1, -2, 1, 0, 5], 0));
console.log(findTwoSum([0, -1, 2, -3, 1], -2));
