function non_repeat_substring(str) {
  let maxLength = 0,
    windowStart = 0,
    charIndexMap = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    rightChar = str[windowEnd];

    if (rightChar in charIndexMap) {
      windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
    }

    charIndexMap[rightChar] = windowEnd;

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

let str = 'aabccbb';

console.log(non_repeat_substring(str));
