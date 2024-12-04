function MinLenSumTarget(array, target) {
  const length = array.length;
  if (length === 0) {
    return null;
  }

  let minLen = length + 1;
  let curSum = 0;
  let left = 0;

  for (let right = 0; right < length; right++) {
    const element = array[right];
    curSum += element;

    while (curSum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      curSum -= array[left];
      left++;
    }
  }

  return minLen === length + 1 ? 0 : minLen;
}

console.log(MinLenSumTarget([1, 3, 5, 3, 2], 5));
