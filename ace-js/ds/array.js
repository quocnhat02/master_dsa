function findFirstUnique(arr) {
  const map = new Map();
  let idx_unique = 0;

  for (const element of arr) {
    map.set(element, (map.get(element) || 0) + 1);
    while (map.get(arr[idx_unique]) > 1) {
      idx_unique++;
    }
  }

  return arr[idx_unique] || null;
}

console.log(findFirstUnique([9, 2, 3, 9, 2, 6, 6]));
