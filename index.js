function find_max_fruits_into_basket(arr) {
  const countFruits = new Map();
  let start = 0,
    max = 0;

  for (let end = 0; end < arr.length; end++) {
    const elmEnd = arr[end];
    countFruits.set(elmEnd, (countFruits.get(elmEnd) | 0) + 1);

    while (countFruits.size > 2 && end > start) {
      const elmStart = arr[start];
      countFruits.set(elmStart, countFruits.get(elmStart) - 1);

      if (!countFruits.get(elmStart)) {
        countFruits.delete(elmStart);
      }

      start++;
    }

    max = Math.max(max, end - start + 1);
  }

  return max;
}

console.log(find_max_fruits_into_basket(['A', 'B', 'C', 'A', 'C']));
console.log(find_max_fruits_into_basket(['A', 'B', 'C', 'B', 'B', 'C']));
