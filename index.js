function minSumGreaterEqualS(s, arr) {
  let sum = 0;
  let min = Infinity;
  let start = 0;
  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];
    if (sum >= s) {
      min = Math.min(min, sum);
      sum -= arr[start];
      start++;
    }
  }

  return min;
}

console.log(
  `Smallest subarray length: ${minSumGreaterEqualS(7, [2, 1, 5, 2, 3, 2])}`
);
console.log(
  `Smallest subarray length: ${minSumGreaterEqualS(7, [2, 1, 5, 2, 8])}`
);
console.log(
  `Smallest subarray length: ${minSumGreaterEqualS(8, [3, 4, 1, 1, 6])}`
);
console.log(
  `Smallest subarray length: ${minSumGreaterEqualS(7, [2, 1, 5, 2, 3, 2])}`
);
console.log(
  `Smallest subarray length: ${minSumGreaterEqualS(7, [2, 1, 5, 2, 8])}`
);
