// Challenge 3: Find Two Numbers that Add up to "value"

function findTwoSum(numbers, target) {
  const length = numbers.length;
  const numMap = new Map();

  for (let i = 0; i < length; i++) {
    const findNum = target - numbers[i];
    if (numMap.has(findNum)) {
      return [numbers[numMap.get(findNum)], numbers[i]];
    }
    numMap.set(numbers[i], i);
  }

  return null;
}

const arr = [1, 21, 3, 14, 5, 60, 7, 6];
const value = 81;

console.log(findTwoSum(arr, value));
