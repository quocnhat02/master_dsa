// Longest Substring with K Distinct Characters (medium)

function findLength(array, k) {
  let longest = 0;
  let map = {};
  let start = 0;
  let sum = 0;

  for (let end = 0; end < array.length; end++) {
    sum += 1;

    if (map[array[end]]) {
      map[array[end]]++;
    } else {
      map[array[end]] = 1;
    }

    while (Object.keys(map).length > k) {
      if (map[array[start]] === 1) {
        delete map[array[start]];
      } else {
        map[array[start]]--;
      }
      sum -= 1;
      start++;
      if (end - start + 1 > longest) {
        longest = end - start + 1;
      }
    }
  }

  return longest;
}

let str = 'araaci';
let k = 2;

console.log(findLength(str, k));
console.log(findLength('araaci', 1));
console.log(findLength('cbbebi', 3));
