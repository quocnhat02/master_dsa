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

console.log(findDuplicates([1, 2, 3, 4, 3, 4]));
