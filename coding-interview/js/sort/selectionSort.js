// selectionSort

function selectionSort(arr) {
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    let min = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }

  return arr;
}

const numbers = [5, 4, 10, 6, 1, 8, 0];

console.log(selectionSort(numbers));
