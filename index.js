function mergeSortedArrays(arr1, arr2) {
  const merged = [];

  let start1 = 0,
    start2 = 0;

  while (start1 < arr1.length && start2 < arr2.length) {
    if (!arr1[start1] || arr1[start1] > arr2[start2]) {
      merged.push(arr2[start2]);
      start2++;
    } else {
      merged.push(arr1[start1]);
      start1++;
    }
  }

  if (start1 >= arr1.length) {
    merged.push(...arr2.slice(start2));
  } else {
    merged.push(...arr1.slice(start1));
  }

  return merged;
}

// Ví dụ sử dụng
let nums1 = [1, 1, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
console.log(mergeSortedArrays(nums1, nums2));
// Output: [1, 2, 2, 3, 5, 6]
