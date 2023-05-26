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

console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9])); // 4
console.log(removeDuplicates([2, 2, 2, 11])); // 2
