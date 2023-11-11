// merge two sorted arrays
function mergeSortedArray(arr1, arr2) {
  const length = arr1.length + arr2.length;
  const merged = [];
  let i = 0,
    j = 0;

  while (i + j < length) {
    if (arr1[i] > arr2[j] || !arr1[i]) {
      merged.push(arr2[j++]);
    } else {
      merged.push(arr1[i++]);
    }
  }

  return merged;
}

const arr1 = [2, 5, 8, 9, 10];
const arr2 = [2, 4, 7, 18];

console.log(mergeSortedArray(arr1, arr2));
