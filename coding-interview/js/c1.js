function twoSum(array, target) {
  const mapLooped = new Map();
  const lengthOfArray = array.length;

  for (let i = 0; i < lengthOfArray; i++) {
    const foundIndex = target - array[i];

    if (mapLooped.has(foundIndex)) {
      return [mapLooped.get(foundIndex), i];
    }
    mapLooped.set(array[i], i);
  }

  return null;
}

console.log(twoSum([2, 7, 11, 15], 9));
