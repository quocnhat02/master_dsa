function rotateRight(array, n) {
  return array.splice(-n).concat(array);
}

console.log(rotateRight([1, 2, 3, 4, 5], 3));
