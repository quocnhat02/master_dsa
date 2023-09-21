function twoSum(array, target) {
  let map = new Map();
  for (let i = 0; i < array.length; i++) {
    const found = target - array[i];
    if (map.has(found)) {
      return [map.get(found), i];
    } else {
      map.set(array[i], i);
    }
  }

  return null;
}

function findDuplicate(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (newArray[element]) {
      return element;
    } else {
      newArray[element] = true;
    }
  }

  return null;
}

function findAllPairs(array, target) {
  let result = [];
  let set = new Set();

  for (let i = 0; i < array.length; i++) {
    const element = target - array[i];
    if (set.has(element)) {
      result.push([element, array[i]]);
    } else {
      set.add(array[i]);
    }
  }

  return result;
}

// console.log(twoSum([2, 7, 11, 15], 13));
// console.log(findDuplicate([2, 7, 11, 2, 15, 7, 2]));
console.log(findAllPairs([2, 7, 10, 4, 15, 7, 2], 14));
