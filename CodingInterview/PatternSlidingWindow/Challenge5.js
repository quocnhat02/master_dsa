// No-repeat Substring (hard)

function findLength(array) {
  let longest = 0;
  let start = 0;
  let map = {};

  for (let end = 0; end < array.length; end++) {
    if (!map[array[end]]) {
      map[array[end]] = 1;
    } else {
      map[array[end]]++;
    }

    while (map[array[end]] > 1) {
      map[array[start]]--;
      console.log('s', map[array[start]]);
      start++;
    }

    if (longest < end - start + 1) {
      longest = end - start + 1;
    }
  }

  return longest;
}

console.log(findLength('aabccbb')); // 3
console.log(findLength('abbbb')); // 2
console.log(findLength('abccdecfghe')); // 6
