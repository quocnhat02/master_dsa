// Challenge 6: Find First Unique Integer in an Array

function findFirstUnique(arr) {
  const map = {};

  for (const number of arr) {
    if (!map[number]) {
      map[number] = 0;
    }
    map[number]++;
  }

  for (const number of arr) {
    if (map[number] === 1) {
      return number;
    }
  }
}

const arr = [9, 2, 3, 2, 6, 6];

console.log(findFirstUnique(arr));
