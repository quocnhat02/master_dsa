//Challenge 6: Find First Unique Integer in an Array

function findFirstUnique(arr) {
  let map = new Map();

  for (let num of arr) {
    if (map[num]) {
      map[num]++;
    } else {
      map[num] = 1;
    }
  }

  for (let num of arr) {
    if (map[num] === 1) {
      return num;
    }
  }

  return null;
}

console.log(findFirstUnique([2, 3, 5, 3, 3, 7, 9, 5, 2]));
