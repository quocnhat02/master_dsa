/**
 * Given an array of elements and
 * a number of positions(d),
 * rotate the array by d positions to the left
 * or right
 */

function swap(array, left, right) {
  while (left < right) {
    let temp = array[left];
    array[left] = array[right];
    array[right] = temp;
    left++;
    right--;
  }
}

function rotateLeft(array, pos) {
  const length = array.length;
  let left = 0,
    right = length - 1;
  swap(array, left, right);

  left = 0;
  right = length - 1 - pos;
  swap(array, left, right);

  left = length - 1 - pos + 1;
  right = length - 1;
  swap(array, left, right);

  return array;
}

function rotateLeftWithExtraMemory(array, pos) {
  const arrLeft = [],
    arrRight = [];

  for (let idx = 0; idx < array.length; idx++) {
    const element = array[idx];
    if (idx < pos) {
      arrLeft.push(element);
    } else {
      arrRight.push(element);
    }
  }

  return arrRight.concat(arrLeft);
}

console.log(rotateLeft([1, 2, 3, 4, 5], 2));
console.log(rotateLeftWithExtraMemory([1, 2, 3, 4, 5], 2));
