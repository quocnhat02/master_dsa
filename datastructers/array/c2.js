// Challenge 2: Merge Two Sorted Arrays

function mergeTwoArray1(arr1, arr2) {
  return [...arr1, ...arr2].sort();
}

function mergeTwoArray2(arr1, arr2) {
  let merged = [];
  let i = 0,
    j = 0;

  while (i <= arr1.length - 1 && j <= arr2.length - 1) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  if (i === arr1.length) {
    return merged.concat(arr2.slice(j));
  } else {
    return merged.concat(arr1.slice(i));
  }
}

const arr1 = [1, 3, 4, 5];
const arr2 = [2, 6, 7, 8];

console.log(mergeTwoArray1(arr1, arr2));
console.log(mergeTwoArray2(arr1, arr2));
