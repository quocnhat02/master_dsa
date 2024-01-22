// Challenge 8: Right Rotate an Array by n
function rotate_right_array(array, n) {
  return array.slice(array.length - n).concat(array.slice(0, array.length - n));
}

console.log(rotate_right_array([1, 2, 3, 4, 5], 3));
