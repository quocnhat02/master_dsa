function binarySearch(array, target) {
  let left = 0,
    right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return mid;
    } else if (array[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

function findTwoSum(array, target) {
  if (array.length < 2) {
    return null;
  }

  array.sort((a, b) => a - b);

  for (let index = 0; index < array.length; index++) {
    const numberToFind = binarySearch(array, target - array[index]);

    if (numberToFind !== -1) {
      return true;
    }
  }

  return null;
}

function findTwoSum2(array, target) {
  if (array.length < 2) {
    return null;
  }

  let left = 0,
    right = array.length - 1;

  array.sort((a, b) => a - b);

  while (left < right) {
    const numberToFind = array[left] + array[right];
    if (numberToFind === target) {
      return true;
    } else if (numberToFind > target) {
      right -= 1;
    } else {
      left += 1;
    }
  }

  return null;
}

function findTwoSum3(array, target) {
  if (array.length < 2) {
    return null;
  }

  let p1 = 0,
    p2;

  while (p1 < array.length - 1) {
    p2 = p1 + 1;
    while (p2 < array.length) {
      const numberToFind = array[p1] + array[p2];
      if (numberToFind === target) {
        return [p1, p2];
      } else {
        p2++;
      }
    }

    p1++;
  }

  return null;
}

const array = [1, 3, 7, 9, 2];

// console.log(findTwoSum(array, 11));
// console.log(findTwoSum2(array, 11));
console.log(findTwoSum3(array, 11));
