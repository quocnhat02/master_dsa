// Challenge 2: Merge Two Sorted Arrays

function mergeSorted(arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0) {
    return arr1.concat(arr2);
  }

  const merged = [];
  const length1 = arr1.length;
  const length2 = arr2.length;
  let i = 0,
    j = 0;

  while (i + j < length1 + length2) {
    const element = arr1[i] > arr2[j] || !arr1[i] ? arr2[j++] : arr1[i++];
    merged.push(element);
  }

  return merged;
}

const arr1 = [1, 3, 5, 7, 9];
const arr2 = [2, 4, 6, 8];

console.log(mergeSorted(arr1, arr2));
