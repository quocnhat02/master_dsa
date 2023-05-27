function linearSearch(array, target) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === target) {
      return index;
    }
  }
  return -1;
}

// console.log(linearSearch([1, 2, 3, 4, 5], 6));

function largestNumber(array) {
  let max = array[0];

  for (let index = 1; index < array.length; index++) {
    if (max < array[index]) {
      max = array[index];
    }
  }

  return max;
}

console.log(largestNumber([1, 2, 5, 8, 7]));
