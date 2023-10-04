// Challenge 3: Find Two Numbers that Add up to "value"

// O(n^2)
function findSum1(numbers, value) {
  if (!numbers || numbers.length <= 1 || !Array.isArray(numbers)) {
    return false;
  }

  for (let i = 0; i < numbers.length; i++) {
    const element1 = numbers[i];
    for (let j = 0; j < numbers.length; j++) {
      const element2 = numbers[j];
      if (element1 + element2 === value) {
        return [element1, element2];
      }
    }
  }
}

// O(n)
function findSum2(numbers, value) {
  if (!numbers || numbers.length <= 1 || !Array.isArray(numbers)) {
    return false;
  }

  const set = new Set();

  for (const number of numbers) {
    const found = value - number;
    if (set.has(found)) {
      return [found, number];
    }
    set.add(number);
  }

  return false;
}

const arr = [1, 21, 3, 14, 5, 60, 7, 6];
const value = 81;
// arr = [21,60]

console.log(findSum1(arr, value));
console.log(findSum2(arr, value));
