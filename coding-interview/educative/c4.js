// Fruits into Baskets (medium)

function findFruitsToBaskets(arr) {
  const fruits = new Map();
  let start = 0;
  let max = 0;

  for (let end = 0; end < arr.length; end++) {
    const elmEnd = arr[end];
    fruits.set(elmEnd, (fruits.get(elmEnd) || 0) + 1);

    while (fruits.size > 2 && end >= start) {
      const elmStart = arr[start];
      fruits.set(elmStart, fruits.get(elmStart) - 1);
      if (!fruits.get(elmStart)) {
        fruits.delete(elmStart);
      }
      start++;
    }

    max = Math.max(max, end - start + 1);
  }

  return max;
}

console.log(findFruitsToBaskets(['A', 'B', 'C', 'A', 'C']));
console.log(findFruitsToBaskets(['A', 'B', 'C', 'B', 'B', 'C']));
