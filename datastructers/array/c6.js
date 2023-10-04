// Challenge 6: Find First Unique Integer in an Array

function findFirstUnique(arr) {
  if (!arr || arr.length === 0) {
    return null;
  }

  const countMap = new Map();

  for (const item of arr) {
    countMap.set(item, (countMap.get(item) || 0) + 1);
  }

  for (const item of arr) {
    if (countMap.get(item) === 1) {
      return item;
    }
  }

  return null;
}

const arr = [9, 2, 3, 2, 6, 6];
// 9

console.log(findFirstUnique(arr));
