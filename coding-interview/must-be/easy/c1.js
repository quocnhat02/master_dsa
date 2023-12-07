function twoSum(arr, target) {
  const numbers = arr;
  const numMap = new Map();

  for (let i = 0; i < numbers.length; i++) {
    if (numMap.has(target - numbers[i])) {
      return [numMap.get(target - numbers[i]), i];
    }
    numMap.set(numbers[i], i);
  }

  return null;
}

const arr = [3, 2, 4];

console.log(twoSum(arr, 6));
