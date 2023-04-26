const mergeSortedArrays = (arr1, arr2) =>
  [...arr1, ...arr2].sort((a, b) => a - b);

function mergeSortedArrays2(arr1, arr2) {
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  let mergeArrays = [],
    i = 0,
    j = 0;

  while (arr1[i] || arr2[j]) {
    arr1[i] > arr2[j]
      ? mergeArrays.push(arr2[j++])
      : mergeArrays.push(arr1[i++]);
  }

  return mergeArrays;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [1, 6, 30]));
console.log(mergeSortedArrays2([0, 3, 4, 31], [1, 6, 30]));
