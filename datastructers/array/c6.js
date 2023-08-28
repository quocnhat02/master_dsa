// Challenge 6: Find First Unique Integer in an Array

function findFirstUnique(arr) {
  const map = new Map();

  for (const num of arr) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  for (const num of arr) {
    if (map.get(num) === 1) {
      return num;
    }
  }

  return null;
}

const arr = [9, 2, 3, 2, 6, 6];

console.log(findFirstUnique(arr));
