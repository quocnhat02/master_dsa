// Challenge 2: Merge Two Sorted Arrays

function mergeArrays1(arr1, arr2) {
  let result = [];

  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr1[i]);
      i++;
    }
  }

  result = result.concat(arr1.slice(i)).concat(arr2.slice(j));

  return result;
}

const mergeArrays2 = (arr1, arr2) => [...arr1, ...arr2].sort();

let arr1 = [1, 3, 4, 5];
let arr2 = [2, 6, 7, 8];

console.log(mergeArrays1(arr1, arr2));
console.log(mergeArrays2(arr1, arr2));
