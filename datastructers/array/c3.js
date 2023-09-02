// Challenge 3: Find Two Numbers that Add up to "value"

function findTwoSum1(array, value) {
  const mapObject = new Map();
  for (let i = 0; i < array.length; i++) {
    const findNum = value - array[i];
    if (mapObject.get(findNum)) {
      return [findNum, array[i]];
    }
    mapObject.set(array[i], i);
  }

  return null;
}

function binarySearch(arr, value) {
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === value) {
      return mid;
    } else if (arr[mid] < value) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

function findTwoSum2(array, value) {
  for (let i = 0; i < array.length; i++) {
    const foundNum = binarySearch(array, value - array[i]);

    if (foundNum !== -1) {
      return [array[i], array[foundNum]];
    }
  }
  return null;
}

const array = [1, 21, 3, 14, 5, 60, 7, 6];
const value = 81;

console.log(findTwoSum1(array, value));
console.log(findTwoSum2(array, value));
