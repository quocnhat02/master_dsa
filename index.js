function ternarySearch(arr, target, l, r) {
  if (r >= l) {
    let mid1 = l + Math.floor((r - l) / 3);
    let mid2 = r - Math.floor((r - l) / 3);
    if (arr[mid1] === target) {
      return mid1;
    }
    if (arr[mid2] === target) {
      return mid2;
    }

    if (target < arr[mid1]) {
      return ternarySearch(arr, target, l, mid1 - 1);
    } else if (target > arr[mid2]) {
      return ternarySearch(arr, target, mid2 + 1, r);
    } else {
      return ternarySearch(arr, target, mid1 + 1, mid2 - 1);
    }
  }
  return -1;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(ternarySearch(array, 8, 0, array.length - 1));
