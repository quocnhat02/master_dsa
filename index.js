function findMaxSubAccumulateSequence(arr, k) {
  const length = arr.length;
  let max = arr[0];
  let startWindow = 0;
  let currentAccumulate = 1;

  for (let endWindow = 0; endWindow < length; endWindow++) {
    currentAccumulate *= arr[endWindow];

    if (endWindow - startWindow >= k - 1) {
      max = Math.max(max, currentAccumulate);
      currentAccumulate /= arr[startWindow];
      startWindow++;
    }
  }

  return max;
}

console.log(findMaxSubAccumulateSequence([1, 2, 3, 4, 5], 3));
