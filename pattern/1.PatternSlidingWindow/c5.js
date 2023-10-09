// No-repeat Substring (hard)

/*
    Input: String="aabccbb"
    Output: 3
    Explanation: The longest substring without any repeating
     characters is "abc".
*/

function countLongestNoRepeat(str) {
  if (!str || str.length <= 0 || typeof str !== 'string') {
    return 0;
  }

  const length = str.length;
  const charExist = new Map();
  let longest = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < length; windowEnd++) {
    const charRight = str[windowEnd];
    charExist.set(charRight, (charExist.get(charRight) || 0) + 1);
    while (charExist.get(charRight) > 1) {
      charExist.set(charRight, charExist.get(charRight) - 1);
      windowStart++;
    }

    longest = Math.max(longest, windowEnd - windowStart + 1);
  }

  return longest;
}

function countLongestNoRepeat2(str) {
  if (!str || str.length <= 0 || typeof str !== 'string') {
    return 0;
  }

  const length = str.length;
  const charExist = new Array(128).fill(0);
  let longest = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < length; windowEnd++) {
    const charRight = str[windowEnd];
    const charCode = charRight.charCodeAt(0);
    windowStart = Math.max(windowStart, charExist[charCode]);
    charExist[charCode] = windowEnd + 1;
    longest = Math.max(longest, windowEnd - windowStart + 1);
  }

  return longest;
}

// console.log(countLongestNoRepeat('aabccbb')); // 3
// console.log(countLongestNoRepeat('abbbb')); // 2
// console.log(countLongestNoRepeat('abccde')); // 3
console.log(countLongestNoRepeat2('aabacdcbb')); // 4
