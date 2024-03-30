// Challenge: Find Two Numbers that Add up to "value"

function findSum(array, target) {
  const countNum = new Map();

  for (let idx = 0; idx < array.length; idx++) {
    countNum.set(array[idx], idx);
  }

  for (let idx = 0; idx < array.length; idx++) {
    const element = array[idx];
    if (countNum.has(target - element)) {
      return [element, target - element];
    }
  }

  return [];
}

console.log(findSum([1, 21, 3, 14, 5, 60, 7, 6], 81));
