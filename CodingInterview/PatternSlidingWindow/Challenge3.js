// Longest Substring with K Distinct Characters (medium)

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

    while (Object.keys(characters).length > k) {
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

console.log(findLongest('araaci', 2)); // "araa"
console.log(findLongest('araaci', 1)); // "aa"
console.log(findLongest('cbbebi', 3)); // "cbbeb" & "bbebi"
