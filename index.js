function linearSearch(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  return -1;
}

const linearSearchRecursive = (arr, n, x) =>
  n === 0 ? -1 : arr[n] === x ? n : linearSearchRecursive(arr, n - 1, x);

const arr = [10, 20, 80, 30, 60, 50, 110, 100, 130, 170];
// console.log(linearSearch(arr, 175));
console.log(linearSearchRecursive(arr, arr.length - 1, 80));

// Time complexity: O(N)
// Auxiliary Space: O(1)
