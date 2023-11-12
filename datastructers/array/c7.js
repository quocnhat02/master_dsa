// Challenge 7: Find Second Maximum Value in an Array

function findSecondMax(numbers) {
  const length = numbers.length;
  let firstMax = numbers[0];
  let secondMax = numbers[0];
  let index = 1;

  while (index < length) {
    firstMax = Math.max(firstMax, numbers[index]);
    if (secondMax < numbers[index] && numbers[index] !== firstMax) {
      secondMax = numbers[index];
    }
    index++;
  }

  return secondMax;
}

const arr = [5, 2, 3, 8, 6, 14, 9];
const arr2 = [6, 9, 3, 5];

console.log(findSecondMax(arr));
console.log(findSecondMax(arr2));
