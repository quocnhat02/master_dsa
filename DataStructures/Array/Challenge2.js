// Challenge 2: Merge Two Sorted Arrays

function mergeArrays1(arr1, arr2) {
  let arr = [];
  let i = 0,
    j = 0;
  let lengthArr1 = arr1.length;
  let lengthArr2 = arr2.length;
  while (i < lengthArr1 && j < lengthArr2) {
    if (arr1[i] > arr2[j]) {
      arr.push(arr2[j]);
      j++;
    } else {
      arr.push(arr1[i]);
      i++;
    }
  }

  if (i <= lengthArr1 - 1) {
    arr1.splice(0, i);
    arr = arr.concat(arr1);
  } else if (j <= lengthArr2 - 1) {
    arr2.splice(0, j);
    arr = arr.concat(arr2);
  }

  return arr;
}

const mergeArrays2 = (arr1, arr2) => [...arr1, ...arr2].sort();

let arr1 = [1, 3, 4, 5];
let arr2 = [2, 6, 7, 8];

console.log(mergeArrays1(arr1, arr2));
