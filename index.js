function threeSum(array) {
  array = array.sort((a, b) => a - b);
  const result = [];

  for (let idx = 0; idx < array.length - 2; idx++) {
    if (array[idx] === array[idx + 1]) {
      continue;
    }

    let left = idx + 1,
      right = array.length - 1;
    while (left < right) {
      const sum = array[idx] + array[left] + array[right];

      if (sum === 0) {
        result.push(array[idx], array[left], array[right]);
        while (array[left] === array[left + 1]) left++;
        while (array[right] === array[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) left++;
      else right--;
    }
  }

  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
