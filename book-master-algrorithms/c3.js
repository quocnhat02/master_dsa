/**
 * Given an array of elements, reverse its elements
 * so that the first element becomes the last,
 * the second element becomes the second-to-last, and so on.
 */

function reverseInPlace(array) {
  let left = 0,
    right = array.length - 1;

  while (left < right) {
    let temp = array[left];
    array[left] = array[right];
    array[right] = temp;

    left++;
    right--;
  }

  return array;
}

function reverseWithExtraMemory(array) {
  const length = array.length;
  const reversed = [];

  for (let idx = length - 1; idx >= 0; idx--) {
    const element = array[idx];
    reversed.push(element);
  }

  return reversed;
}

console.log(reverseInPlace([1, 4, 2, 7, 5]));
console.log(reverseWithExtraMemory([1, 4, 2, 7, 5]));
