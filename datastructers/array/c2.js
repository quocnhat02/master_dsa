// Challenge 2: Merge Two Sorted Arrays

function mergeSorted(arr1, arr2) {
  const totalLength = arr1.length + arr2.length;
  if (totalLength === arr1.length || totalLength === arr2.length) {
    return arr1.concat(arr2);
  }
  const merged = [];
  let i = 0,
    j = 0;

  while (i + j < totalLength) {
    if (!arr1[i] || arr1[i] > arr2[j]) {
      merged.push(arr2[j++]);
    } else {
      merged.push(arr1[i++]);
    }
  }

  return merged;
}

const arr1 = [1, 3, 4, 5, 9];
const arr2 = [2, 6, 7, 8];

console.log(mergeSorted(arr1, arr2));
