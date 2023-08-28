// Challenge 3: Find Two Numbers that Add up to "value"

function binarySearch(arr, target) {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

function findSum1(arr, value) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    const found = binarySearch(arr, value - arr[i]);

    if (found !== -1) {
      return [arr[i], arr[found]];
    }
  }

  return -1;
}

function findSum2(arr, value) {
  const mapNum = new Map();

  //   for (let i = 0; i < arr.length; i++) {
  //     if (!mapNum.get(arr[i])) {
  //       mapNum.set(arr[i], i);
  //     }

  //     const found = value - arr[i];

  //     if (mapNum.get(found)) {
  //       return [arr[i], found];
  //     }
  //   }

  let i = 0,
    j = arr.length - 1;

  while (i <= j) {
    if (!mapNum.get(arr[i])) {
      mapNum.set(arr[i], i);
    }
    if (!mapNum.get(arr[j])) {
      mapNum.set(arr[j], j);
    }

    const foundStart = value - arr[i];

    if (mapNum.get(foundStart)) {
      return [arr[i], foundStart];
    }

    const foundEnd = value - arr[j];

    if (mapNum.get(foundEnd)) {
      return [arr[j], foundEnd];
    }

    i++;
    j--;
  }

  return -1;
}

const arr = [1, 21, 3, 14, 5, 60, 7, 6];
const value = 81;

// console.log(findSum1(arr, value));
console.log(findSum2(arr, value));
