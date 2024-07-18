function findFirstUnique(arr) {
  const countMap = new Map();

  // First pass: count occurrences of each element
  for (const element of arr) {
    countMap.set(element, (countMap.get(element) || 0) + 1);
  }

  // Second pass: find the first unique element
  for (const element of arr) {
    if (countMap.get(element) === 1) {
      return element;
    }
  }

console.log(findFirstUnique([9, 2, 3, 9, 2, 6, 6]));
