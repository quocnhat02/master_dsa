function findFruitsIntoBaskets(fruits, basket = 2) {
  const count_fruits = new Map();
  const length = fruits.length;
  let max_fruits = 0;
  let start = 0;

  for (let end = 0; end < length; end++) {
    const cur_fruit = fruits[end];
    count_fruits.set(cur_fruit, (count_fruits.get(cur_fruit) || 0) + 1);

    while (count_fruits.size > basket) {
      const first_fruit = fruits[start];
      count_fruits.set(first_fruit, count_fruits.get(first_fruit) - 1);
      if (count_fruits.get(first_fruit) === 0) {
        count_fruits.delete(first_fruit);
      }
      start++;
    }

    max_fruits = Math.max(max_fruits, end - start + 1);
  }

  return max_fruits;
}

console.log(findFruitsIntoBaskets(['A', 'B', 'C', 'A', 'C']));
console.log(findFruitsIntoBaskets(['A', 'B', 'C', 'B', 'B', 'C']));
