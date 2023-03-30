function findLength(str, k) {
  let maxLength = 0,
    windowStart = 0,
    maxRepeatLength = 0,
    letterFrequency = {},
    leftChar,
    rightChar;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    rightChar = str[windowEnd];

    if (!(rightChar in letterFrequency)) {
      letterFrequency[rightChar] = 0;
    }

    letterFrequency[rightChar]++;

    maxRepeatLength = Math.max(maxRepeatLength, letterFrequency[rightChar]);

    if (windowEnd - windowStart + 1 - maxRepeatLength > k) {
      leftChar = str[windowStart];
      letterFrequency[leftChar]--;
      if (letterFrequency[leftChar] === 0) {
        delete letterFrequency[leftChar];
      }
      windowStart++;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

let str = 'abbcb';

console.log(findLength(str, 1));
