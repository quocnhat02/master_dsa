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

  return -1;
}

console.log(twoSum([2, 7, 11, 15], 22));
