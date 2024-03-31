function sortMaxMin(arr) {
  const maxMin = [];
  for (let idx = 0; idx < arr.length / 2; idx++) {
    maxMin.push(arr[arr.length - 1 - idx]);
    if (idx !== arr.length - 1 - idx) {
      maxMin.push(arr[idx]);
    }
  }

  return maxMin;
}

function arrangeMaxMin(arr) {
  let idxMax = arr.length - 1;
  let idxMin = 0;
  let maxElem = arr[idxMax] + 1;

  for (let idx = 0; idx < arr.length; idx++) {
    if (idx % 2 === 0) {
      arr[idx] += Math.floor((arr[idxMax] % maxElem) * maxElem);
      idxMax--;
    } else {
      arr[idx] += Math.floor((arr[idxMin] % maxElem) * maxElem);
      idxMin++;
    }
  }

  for (let idx = 0; idx < arr.length; idx++) {
    arr[idx] = Math.floor(arr[idx] / maxElem);
  }

  return arr;
}

console.log(sortMaxMin([1, 2, 3, 4, 5]));
console.log(arrangeMaxMin([1, 2, 3, 4, 5]));

// [1,2,3,4,5]
//      ^
// [5,1,4,2,]
