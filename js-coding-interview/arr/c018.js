function reArrange(arr) {
  let idxLeftPos = 0,
    tmp;

  for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx] < 0) {
      if (idx !== idxLeftPos) {
        tmp = arr[idx];
        arr[idx] = arr[idxLeftPos];
        arr[idxLeftPos] = tmp;
      }
      idxLeftPos++;
    }
  }

  return arr;
}

// [-1,-9,-6, 4,5,10,20]

// [-1,-9,-6,4,5,10,20]
//           ^
//                   ^

console.log(reArrange([10, -1, 20, 4, 5, -9, -6]));
