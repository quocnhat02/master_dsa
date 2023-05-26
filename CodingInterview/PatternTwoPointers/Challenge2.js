// Remove Duplicates (easy)

function removeDuplicates(array) {
  let start = 0;
  let end = array.length - 1;
  let map = {};

  while (end > start) {
    if (!map[array[start]]) {
      map[array[start]] = true;
    } else {
      start++;
    }
    if (!map[array[end]]) {
      map[array[end]] = true;
    } else {
      end--;
    }
  }

  return Object.keys(map).length;
}

function removeDuplicates2(array) {
  let start = 0;
  let end = array.length - 1;
  let sum = 0;
  let result = [];

  while (end >= start) {
    if (array[start] !== array[start + 1]) {
      sum++;
      result.push(array[start]);
    }
    start++;
  }

  return result;
}

// console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9])); // 4
// console.log(removeDuplicates([2, 2, 2, 11])); // 2

console.log(removeDuplicates2([2, 3, 3, 3, 6, 9, 9])); // 4
console.log(removeDuplicates2([2, 2, 2, 11])); // 2
