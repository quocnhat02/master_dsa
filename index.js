function hasDuplicate(arr) {
  let left = 0,
    right = 1;
  while (right < arr.length) {
    if (arr[left] === arr[right]) {
      return true;
    }

    left++;
    right++;
  }

  return false;
}

console.log(hasDuplicate([1, 2, 2, 3, 4, 5]));
