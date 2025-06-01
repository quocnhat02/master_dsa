function sortColors(array) {
  let left = 0,
    mid = 0,
    right = array.length - 1;

  while (mid <= right) {
    if (array[mid] === 0) {
      [array[left], array[mid]] = [array[mid], array[left]];
      mid++;
      left++;
    } else if (array[mid] === 1) {
      mid++;
    } else if (array[mid] === 2) {
      [array[right], array[mid]] = [array[mid], array[right]];
      right--;
    }
  }
  return array;
}

console.log(sortColors([2, 0, 2, 1, 1, 0]));
