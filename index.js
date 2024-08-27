function removeElement(arr, k) {
  let i = 0;

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== k) {
      arr[i] = arr[j];
      i++;
    }
  }

  return i;
}

// Ví dụ sử dụng
let nums = [3, 2, 2, 3];
console.log(removeElement(nums, 3)); // Output: 2
console.log(nums.slice(0, 2)); // Output: [2, 2]
