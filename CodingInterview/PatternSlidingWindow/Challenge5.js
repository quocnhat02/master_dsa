// No-repeat Substring (hard)

function findLongest(str) {
  let max = 0;
  let start = 0;
  let characters = {};

  for (let end = 0; end < str.length; end++) {
    if (!characters[str[end]]) {
      characters[str[end]] = 1;
    } else {
      characters[str[end]]++;
    }

    while (characters[str[end]] > 1) {
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

console.log(findLongest('aabccbb')); // "abc"
console.log(findLongest('abbbb')); // "ab"
console.log(findLongest('abccde')); //  "abc" & "cde"
