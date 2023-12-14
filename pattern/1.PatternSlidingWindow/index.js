// Sliding Window

function findAverageSubArr(array, k) {
  const res = [];
  let start = 0;
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    if (i >= k - 1) {
      res.push(sum / k);
      sum -= array[start++];
    }
  }

  return res;
}

console.log(findAverageSubArr([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));

// [2.2, 2.8, 2.4, 3.6, 2.8]
