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

console.log(sortMaxMin([1, 2, 3, 4, 5]));

// [1,2,3,4,5]
//      ^
// [5,1,4,2,]
