function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = numberToInsert;
  }
}

const array = [20, 16, -8, 2, 7, 4];
// 20, 16, -8, 2, 7, 4 NTS=16, SE=20
// 16, 20, -8, 2, 7, 4 NTS=20 SE=

insertionSort(array);
console.log(array);
