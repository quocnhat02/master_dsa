// Challenge 2: Merge Two Sorted Arrays

function mergeSorted(arr1, arr2) {
  const length = arr1.length + arr2.length;
  const merged = [];
  let indexOfArr1 = 0,
    indexOfArr2 = 0;

  while (indexOfArr1 + indexOfArr2 < length) {
    if (arr1[indexOfArr1] > arr2[indexOfArr2] || !arr1[indexOfArr1]) {
      merged.push(arr2[indexOfArr2++]);
    } else {
      merged.push(arr1[indexOfArr1++]);
    }
  }

  return merged;
}

const arr1 = [1, 3, 5, 7, 9];
const arr2 = [2, 4, 6, 8, 10];

console.log(mergeSorted(arr1, arr2));
