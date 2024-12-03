function reverseArray(array) {
  if (array.length <= 1) {
    return array;
  }

  let reversed = [];
  let left = 0,
    right = array.length - 1;

  while (left <= right) {
    if (left == right) {
      reversed[left] = array[left];
    } else {
      reversed[left] = array[right];
      reversed[right] = array[left];
    }
    left++;
    right--;
  }

  return reversed;
}

// function reverseArray(str) {
//   return str.reverse();
// }

console.log(reverseArray([1, 2, 3, 4, 5]));
