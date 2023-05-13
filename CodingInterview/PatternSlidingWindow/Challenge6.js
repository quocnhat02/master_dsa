// Longest Substring with Same Letters after Replacement (hard)

function findLength(str, k) {
  let longest = 0;
  let map = {};
  let start = 0;

  for (let end = 0; end < str.length; end++) {
    if (!map[str[end]]) {
      map[str[end]] = 1;
    } else {
      map[str[end]]++;
    }

    if (Object.keys(map).length > 1) {
      if (Object.keys(map).length > 2) {
        let temp = map[str[start]];
        delete map[str[start]];
        start += temp;
      }

      while (map[str[end]] > k && str[end] !== str[start]) {
        delete map[str[start]];
        start++;
      }
    }

    if (longest < end - start + 1) {
      longest = end - start + 1;
    }
  }

  return longest;
}

console.log(findLength('aabccbb', 2)); // 5
console.log(findLength('abbcb', 1)); // 4
console.log(findLength('abccde', 1)); // 3
