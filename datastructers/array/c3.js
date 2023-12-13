// Challenge 3: Find Two Numbers that Add up to "value"

function findTwoSum(arr, target) {
  const numExist = new Set();

  for (const number of arr) {
    if (numExist.has(target - number)) {
      return [target - number, number];
    }
    numExist.add(number);
  }

  return null;
}

console.log(findTwoSum([1, 21, 3, 14, 5, 60, 7, 6], 81));
