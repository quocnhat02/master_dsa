function findTwoSum(arr, value) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const elementSub = value - arr[i];
    if (map.has(elementSub)) {
      return [elementSub, arr[i]];
    } else {
      map.set(arr[i], i);
    }
  }

  return null;
}

console.log(findTwoSum([1, 21, 3, 3, 14, 5, 60, 7, 6], 6));
