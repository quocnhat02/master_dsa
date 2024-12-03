function findDuplicates(arr) {
  if (arr.length == 0) {
    return null;
  }

  const setNum = new Set();

  for (let idx = 0; idx < arr.length; idx++) {
    if (setNum.has(arr[idx])) return true;
    setNum.add(arr[idx]);
  }

  return false;
}

nums = [1, 2, 3, 4];
console.log(findDuplicates(nums));
