function fruits_into_baskets(arr) {
  let maxLength = 0,
    windowStart = 0,
    leftChar = 0,
    rightChar = 0,
    fruitFrequency = {};

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    rightChar = arr[windowEnd];

    if (!(rightChar in fruitFrequency)) {
      fruitFrequency[rightChar] = 0;
    }

    fruitFrequency[rightChar]++;

    while (Object.keys(fruitFrequency).length > 2) {
      leftChar = arr[windowStart];
      fruitFrequency[leftChar]--;
      if (fruitFrequency[leftChar] === 0) {
        delete fruitFrequency[leftChar];
      }

      windowStart++;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

let arr = ['A', 'B', 'C', 'A', 'C'];

console.log(fruits_into_baskets(arr));
