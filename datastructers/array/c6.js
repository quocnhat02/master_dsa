// Challenge 6: Find First Unique Integer in an Array

function findFirstUnique(numbers) {
  const numMap = new Map();

  for (const number of numbers) {
    numMap.set(number, (numMap.get(number) || 0) + 1);
  }

  for (const number of numbers) {
    const element = numMap.get(number);
    if (element === 1) {
      return number;
    }
  }

  return null;
}

const arr = [9, 2, 3, 2, 6, 6];

console.log(findFirstUnique(arr));
