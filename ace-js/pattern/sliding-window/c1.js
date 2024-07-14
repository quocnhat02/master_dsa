// find max sum sequence

function findMaxSumSequence(numbers, size) {
  const length = numbers.length;

  if (length < size) {
    return null;
  } else {
    let idx = 0,
      start = 0,
      sum = 0,
      max = numbers[idx];

    while (idx < length) {
      sum += numbers[idx];
      if (idx >= size) {
        sum -= numbers[start];
        start++;
      }
      max = Math.max(max, sum);
      idx++;
    }
    return max;
  }
}

console.log(findMaxSumSequence([-4, 2, -5, 3, 6], 3));
