function mergeSorted(arr1, arr2) {
  const merged = [],
    length = arr1.length + arr2.length;
  let idx1 = 0,
    idx2 = 0;

  while (idx1 + idx2 < length) {
    if (arr1[idx1] > arr2[idx2] || !arr1[idx1]) {
      merged.push(arr2[idx2]);
      idx2++;
    } else {
      merged.push(arr1[idx1]);
      idx1++;
    }
  }

  return merged;
}

console.log(mergeSorted([1, 3, 4, 5, 9], [2, 6, 7, 8]));
