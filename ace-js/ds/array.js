function removeEven(numbers) {
  return numbers.filter((number) => number % 2 !== 0);
}

// console.log(removeEven([1, 2, 3, 4, 5]));

function mergeSorted(arr1, arr2) {
  let left1 = 0,
    left2 = 0;
  const length = arr1.length + arr2.length;
  const merged = [];

  while (left1 + left2 < length) {
    if (arr1[left1] < arr2[left2] || !arr2[left2]) {
      merged.push(arr1[left1]);
      left1++;
    } else {
      merged.push(arr2[left2]);
      left2++;
    }
  }

  return merged;
}

console.log(mergeSorted([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]));
