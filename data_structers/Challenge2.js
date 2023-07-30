// Challenge 2: Merge Two Sorted Arrays

// Sample Input #
// arr1 = [1,3,4,5]
// arr2 = [2,6,7,8]
// Sample Output #
// arr = [1,2,3,4,5,6,7,8]

let arr1 = [1, 3, 4, 5];
let arr2 = [2, 6, 7, 8];

// O(n + m)
function mergeArrays1(arr1, arr2) {
  let merged = [];
  let i = 0;
  let j = 0;

  while (i <= arr1.length - 1 && j <= arr2.length - 1) {
    if (arr1[i] > arr2[j]) {
      merged.push(arr2[j]);
      j++;
    } else {
      merged.push(arr1[i]);
      i++;
    }
  }

  if (i >= arr1.length) {
    return merged.concat(arr2.slice(j));
  } else {
    return merged.concat(arr1.slice(i));
  }
}

// O(nlogn)
function mergeArrays2(arr1, arr2) {
  return [...arr1, ...arr2].sort();
}

console.log(mergeArrays1(arr1, arr2));
console.log(mergeArrays2(arr1, arr2));
