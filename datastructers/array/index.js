function mergeSortedArrays1(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

function mergeSortedArrays2(arr1, arr2) {
  const itemsOfArray1 = arr1.length - 1;
  const itemsOfArray2 = arr2.length - 1;
  if (itemsOfArray1 <= 0 || itemsOfArray2 <= 0) {
    return itemsOfArray1.concat(itemsOfArray2);
  }
  let mergedSortedArray = [];
  let indexOfArray1 = 0,
    indexOfArray2 = 0;

  while (indexOfArray1 <= itemsOfArray1 && indexOfArray2 <= itemsOfArray2) {
    if (arr1[indexOfArray1] < arr2[indexOfArray2]) {
      mergedSortedArray.push(arr1[indexOfArray1]);
      indexOfArray1++;
    } else {
      mergedSortedArray.push(arr2[indexOfArray2]);
      indexOfArray2++;
    }
  }

  if (indexOfArray1 > itemsOfArray1) {
    mergedSortedArray = mergedSortedArray.concat(arr2.slice(indexOfArray2));
  } else {
    mergedSortedArray = mergedSortedArray.concat(arr1.slice(indexOfArray1));
  }

  return mergedSortedArray;
}

let arr1 = [1, 3, 5, 7, 9];
let arr2 = [0, 2, 4, 6, 8];

// console.log(mergeSortedArrays1(arr1, arr2));
console.log(mergeSortedArrays2(arr1, arr2));
