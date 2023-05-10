function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

function mergeArrays2(arr1, arr2) {
  let merged = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      merged.push(arr2[j]);
      j++;
    } else {
      merged.push(arr1[i]);
      i++;
    }
  }

  if (i < arr1.length) {
    merged = merged.concat(arr1.splice(i));
  } else if (j < arr2.length) {
    merged = merged.concat(arr2.splice(j));
  }

  return merged;
}

let arr1 = [1, 3, 4, 5];
let arr2 = [2, 6, 7, 8];

console.log(mergeArrays(arr1, arr2));
console.log(mergeArrays2(arr1, arr2));
