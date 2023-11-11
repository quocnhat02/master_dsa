// counting sort
function countingSort(arr) {
  let ma = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > ma) {
      ma = arr[i];
    }
  }

  let count = new Array(ma + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }
  for (let i = 1; i < count.length; i++) {
    count[i] = count[i - 1] + count[i];
  }
  let result = new Array(arr.length);
  for (let i = arr.length - 1; i >= 0; i--) {
    let position = count[arr[i]];
    result[position - 1] = arr[i];
    count[arr[i]]--;
  }
  for (let i = 0; i < result.length; i++) {
    arr[i] = result[i];
  }
}

const arr = [4, 2, 6, 8, 7, 5, 1, 3];

countingSort(arr);

console.log(arr);
