// two way partitioning
function partition(arr) {
  let pivot = arr[arr.length - 1];
  let f = 0;
  for (let c = 0; c < arr.length - 1; c++) {
    if (arr[c] <= pivot) {
      let temp = arr[f];
      arr[f] = arr[c];
      arr[c] = temp;
      f++;
    }
  }
  let temp = arr[f];
  arr[f] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;

  return f;
}

const arr = [2, 5, 1, 6, 7, 8, 4];

partition(arr);

console.log(arr);
