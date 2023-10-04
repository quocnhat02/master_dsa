// Challenge 6: Find First Unique Integer in an Array

function findFirstUnique(arr) {
  if (!arr || arr.length === 0) {
    return null;
  }

  const map = new Map();

  for (const item of arr) {
    if (!map.has(item)) {
      map.set(item, 0);
    }
    map.set(item, map.get(item) + 1);
  }

  for (const item of arr) {
    if (map.get(item) === 1) {
      return item;
    }
  }

  return null;
}

const arr = [9, 2, 3, 2, 6, 6];
// 9

console.log(findFirstUnique(arr));
