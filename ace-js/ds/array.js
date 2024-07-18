function rearrangeMaxMin(arr) {
  const result = [],
    length = arr.length;

  for (let idx = 0; idx < Math.ceil(length / 2); idx++) {
    result.push(arr[length - 1 - idx]);
    if (idx < Math.floor(length / 2)) {
      result.push(arr[idx]);
    }
  }

  return result;
}

console.log(rearrangeMaxMin([1, 2, 3, 4, 5, 6]));
