// Longest Substring with Same Letters after Replacement (hard)

function findLongest(str, k) {
  let max = 0;
  let start = 0;
  let characters = {};

  for (let end = 0; end < str.length; end++) {
    if (!characters[str[end]]) {
      characters[str[end]] = 1;
    } else {
      characters[str[end]]++;
    }

    while (Object.keys(characters).length > 2) {
      characters[str[start]]--;
      if (characters[str[start]] === 0) {
        delete characters[str[start]];
      }
      start++;
    }

    if (max < end - start + 1) {
      max = end - start + 1;
    }
  }

  return max;
}

console.log(findLongest('aabccbb', 2)); // "bbbbb"
console.log(findLongest('abbcb', 1)); // "bbbb"
console.log(findLongest('abccde', 1)); //  "ccc"
