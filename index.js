function mergeSortedArrays(arr1, arr2) {
  const len = arr1.length + arr2.length;
  const merged = [];

  let start1 = 0,
    start2 = 0;

  while (start1 + start2 < len) {
    if (!arr2[start2] || arr1[start1] < arr2[start2]) {
      merged.push(arr1[start1]);
      start1++;
    } else {
      merged.push(arr2[start2]);
      start2++;
    }
  }

  return merged;
}

// Ví dụ sử dụng
let nums2 = [1, 1, 3, 4, 7, 9];
let nums1 = [2, 5, 6];
console.log(mergeSortedArrays(nums1, nums2));
// Output: [1, 2, 2, 3, 5, 6]
