// Challenge 2: Merge Two Sorted Arrays

function mergeArrays(arr1, arr2) {
  let merged = [];
  let i = 0,
    j = 0;

  while (i <= arr1.length - 1 && j <= arr2.length - 1) {
    if (arr1[i] > arr2[j]) {
      merged.push(arr2[j]);
      j++;
    } else {
      merged.push(arr1[i]);
      i++;
    }
  }

  if (i > arr1.length - 1) {
    return merged.concat(arr2.slice(j));
  } else {
    return merged.concat(arr2.slice(j));
  }
}

const arr1 = [1, 3, 4, 5];
const arr2 = [2, 6, 7, 8];

console.log(mergeArrays(arr1, arr2));
