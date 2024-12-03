function twoSum(array, target) {
  if (array.length === 0 || target == undefined || target === null) {
    return null;
  }
  const map = new Map();
  for (let idx = 0; idx < array.length; idx++) {
    const complement = target - array[idx];
    if (map.has(complement)) return [array[map.get(complement)], array[idx]];
    map.set(array[idx], idx);
  }

  return null;
}

console.log(twoSum([1, 2, 3, 4, 5], 8));
