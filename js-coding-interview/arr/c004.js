// Challenge: Merge Two Sorted Arrays

function mergeTwoSorted(array1, array2) {
  const merged = [];
  let idxArr1 = 0,
    idxArr2 = 0;
  // [1,3,5,7,9]
  //          ^
  // [2,4,6,8]
  //          ^
  // [1,2,3,4,5,6,7,8]
  while (idxArr1 + idxArr2 < array1.length + array2.length) {
    if (array1[idxArr1] < array2[idxArr2] || !array2[idxArr2]) {
      merged.push(array1[idxArr1]);
      idxArr1++;
    } else {
      merged.push(array2[idxArr2]);
      idxArr2++;
    }
  }

  return merged;
}

console.log(mergeTwoSorted([1, 3, 4, 5, 9], [2, 6, 7, 8]));
