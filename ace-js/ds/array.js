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

function rearrangeMaxMinOp(arr) {
  let maxIdx = arr.length - 1,
    minIdx = 0,
    maxElem = arr[maxIdx] + 1;

  for (let idx = 0; idx < arr.length; idx++) {
    if (idx % 2 === 0) {
      arr[idx] += Math.floor((arr[maxIdx] % maxElem) * maxElem);
      maxIdx--;
    } else {
      arr[idx] += Math.floor((arr[minIdx] % maxElem) * maxElem);
      minIdx++;
    }
  }

  for (let idx = 0; idx < arr.length; idx++) {
    arr[idx] = Math.floor(arr[idx] / maxElem);
  }

  return arr;
}

console.log(rearrangeMaxMinOp([1, 2, 3, 4, 5, 6]));
