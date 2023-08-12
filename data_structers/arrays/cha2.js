// Challenge 2: Merge Two Sorted Arrays

function mergeTwoSortedArray1(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

function mergeTwoSortedArray2(arr1, arr2) {
  let i = 0,
    j = 0;
  const merged = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      merged.push(arr2[j]);
      j++;
    } else if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    }
  }

  if (i === arr1.length) {
    return merged.concat(arr2.slice(j));
  } else {
    return merged.concat(arr1.slice(i));
  }
}

const arr1 = [1, 3, 5, 7, 9];
const arr2 = [2, 4, 6, 8];

console.log(mergeTwoSortedArray1(arr1, arr2));
console.log(mergeTwoSortedArray2(arr1, arr2));
