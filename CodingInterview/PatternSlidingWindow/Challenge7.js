// Longest Subarray with Ones after Replacement (hard)

function findLength(arr, k) {
  let longest = 0;
  let map = {
    0: 0,
    1: 0,
  };
  let start = 0;

  for (let end = 0; end < arr.length; end++) {
    map[arr[end]]++;

    while (map['0'] > k) {
      if (arr[start] === 1) {
        map['1']--;
        start++;
      } else {
        map['0']--;
        start++;
      }
    }

    if (longest < end - start + 1) {
      longest = end - start + 1;
    }
  }

  return longest;
}

console.log(findLength([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2)); // 6
console.log(findLength([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3)); // 9
