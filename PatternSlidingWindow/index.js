function longest_subarray_with_k_distinct(str, k) {
  let maxLength = 0,
    windowStart = 0,
    leftChar = 0,
    rightChar = 0,
    charFrequency = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    rightChar = str[windowEnd];

    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }

    charFrequency[rightChar]++;

    while (Object.keys(charFrequency).length > k) {
      leftChar = str[windowStart];
      charFrequency[leftChar]--;
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      }
      windowStart++;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

let str = 'araaci';
let k = 2;

console.log(longest_subarray_with_k_distinct(str, k));
