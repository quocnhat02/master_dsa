// Challenge 2: Merge Two Sorted Arrays

const mergeArrays1 = (arr1, arr2) => [...arr1, ...arr2].sort((a, b) => a - b);

const mergeArrays2 = (arr1, arr2) => {
  let mergeArray = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      mergeArray.push(arr2[j]);
      j++;
    } else {
      mergeArray.push(arr1[i]);
      i++;
    }
  }

  if (i <= arr1.length - 1) {
    arr1.splice(0, i);
    mergeArray = mergeArray.concat(arr1);
  } else if (j <= arr2.length - 1) {
    arr2.splice(0, j);
    mergeArray = mergeArray.concat(arr2);
  }

  return mergeArray;
};

let arr1 = [1, 3, 4, 7];
let arr2 = [2, 5, 6, 8];

// console.log(mergeArrays1(arr1, arr2));
console.log(mergeArrays2(arr1, arr2));
