// Challenge 3: Find Two Numbers that Add up to "value"

function findTwoSum(numbers, value) {
  const numMap = new Map();
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    const subValue = value - element;
    const findNum = numMap.get(subValue);
    if (findNum) {
      return [numbers[findNum], element];
    }
    numMap.set(element, index);
  }

  return null;
}

const numbers = [1, 3, 5, 7, 9];
const value = 14;

console.log(findTwoSum(numbers, value));
