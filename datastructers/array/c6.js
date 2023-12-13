// Challenge 6: Find First Unique Integer in an Array

function findUnique(arr) {
  const numCount = new Map();

  for (const num of arr) {
    numCount.set(num, (numCount.get(num) || 0) + 1);
  }

  for (const num of arr) {
    if (numCount.get(num) === 1) {
      return num;
    }
  }

  return null;
}

console.log(findUnique([9, 2, 3, 2, 6, 6]));
