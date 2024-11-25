function find_fruits_into_basket(fruits) {
  const count_char = new Map();
  let idx_sub = 0;
  let max = 0;

  for (let idx = 0; idx < fruits.length; idx++) {
    count_char.set(fruits[idx], (count_char.get(fruits[idx]) | 0) + 1);

    while (count_char.size > 2) {
      const sub_elm = fruits[idx_sub];
      count_char.set(sub_elm, count_char.get(sub_elm) - 1);
      if (count_char.get(sub_elm) == 0) {
        count_char.delete(sub_elm);
      }
      idx_sub++;
    }

    max = count_char.size == 2 ? Math.max(max, idx - idx_sub + 1) : max;
  }

  return max;
}

console.log(find_fruits_into_basket(['A', 'B', 'C', 'A', 'C']));
console.log(find_fruits_into_basket(['A', 'B', 'C', 'B', 'B', 'C']));
