// c1
function twoSum(array, target, lengthOfArray = array.length) {
  const mapLooped = new Map();

  for (let i = 0; i < lengthOfArray; i++) {
    const foundIndex = target - array[i];

    if (mapLooped.has(foundIndex)) {
      return [mapLooped.get(foundIndex), i];
    }
    mapLooped.set(array[i], i);
  }

  return null;
}
// console.log(twoSum([2, 7, 11, 15], 9));

// c2
function findDuplicates(array) {
  const arrayLooped = [];

  for (const number of array) {
    if (arrayLooped[number]) {
      return number;
    }
    arrayLooped[number] = true;
  }

  return null;
}
// console.log(findDuplicates([1, 2, 3, 4, 3, 4]));

// c3
function pairs(array, target, lengthOfArray = array.length) {
  const mapLooped = new Map();

  for (let i = 0; i < lengthOfArray; i++) {
    const number = array[i];
    const foundNumber = mapLooped.has(target - number);
    if (foundNumber) {
      const indexOfNumber = mapLooped.get(target - number);
      const valueOfNumber = array[indexOfNumber];
      return [valueOfNumber, number];
    }

    mapLooped.set(number, i);
  }

  return null;
}
// console.log(pairs([-4, 6, 2, 8, 5, 23], 19));

// c4
function squaresOfSortedArray(array, lengthOfArray = array.length) {
  let l = 0,
    r = lengthOfArray - 1;
  let index = lengthOfArray - 1;
  let result = [];

  while (l <= r) {
    let square;
    if (Math.abs(array[l]) > Math.abs(array[r])) {
      square = array[l] * array[l];
      l++;
    } else {
      square = array[r] * array[r];
      r--;
    }
    result[index] = square;
    index--;
  }

  return result;
}

console.log(squaresOfSortedArray([-10, -3, 1, 7, 9, 15]));
