//Challenge 6: Find First Unique Integer in an Array

function findFirstUnique(arr) {
  let map = new Map();

  for (let num of arr) {
    if (map.has(num)) {
      map.set(num, false);
    } else {
      map.set(num, true);
    }
  }

  for (let [num, isUnique] of map) {
    if (isUnique) {
      return num;
    }
  }

  return -1;
}

console.log(findFirstUnique([2, 3, 5, 3, 7, 9, 5, 2]));
