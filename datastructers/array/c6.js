// Challenge 6: Find First Unique Integer in an Array
function find_first_unique(numbers) {
  const map_number = numbers.reduce(
    (prev, cur) => prev.set(cur, (prev.get(cur) || 0) + 1),
    new Map()
  );

  for (const [key, value] of map_number) {
    if (value === 1) {
      return key;
    }
  }

  return null;
}

// [9,3,2,5,5,3] -> 9

console.log(find_first_unique([9, 2, 3, 2, 6, 6]));
