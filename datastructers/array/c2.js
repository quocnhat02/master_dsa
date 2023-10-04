// Challenge 2: Merge Two Sorted Arrays
// O(n*log(n))
function mergeArrays1(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

// O(n)
function mergeArrays2(arr1, arr2) {
  if (!arr1 || !arr2 || arr1.length === 0 || arr2.length === 0) {
    return [...arr1, ...arr2];
  }

  const merged = [];
  let i = 0,
    j = 0;

  while (i < arr1.length || j < arr2.length) {
    if (!arr2[j] || arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  return merged;
}

const arr1 = [1, 3, 4, 5];
const arr2 = [2, 6, 7, 8];
// arr = [1,2,3,4,5,6,7,8]

console.log(mergeArrays1(arr1, arr2));
console.log(mergeArrays2(arr1, arr2));
