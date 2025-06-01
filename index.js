function moveZeros(arr) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    while (arr[left] === 0) {
      left++;
    }
    if (arr[right] === 0) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
    } else {
      right--;
    }
  }

  return arr;
}

console.log(moveZeros([0, 1, 1, 1, 0, 1, 0, 1, 1]));
