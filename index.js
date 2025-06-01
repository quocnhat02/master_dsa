function mergeInterval(arr) {
  if (!arr.length) return [];

  const result = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    const [start, end] = arr[i];
    const lastResult = result[result.length - 1];
    if (lastResult[1] >= start) {
      lastResult[1] = Math.max(end, lastResult[1]);
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(
  mergeInterval([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
