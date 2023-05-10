// Fruits into Baskets (medium)

function fruits_into_baskets(array) {
  let max = 0;
  let start = 0;
  let map = {};

  for (let end = 0; end < array.length; end++) {
    if (map[array[end]]) {
      map[array[end]]++;
    } else {
      map[array[end]] = 1;
    }

    while (Object.keys(map).length > 2) {
      if (map[array[start]] === 1) {
        delete map[array[start]];
      } else {
        map[array[start]]--;
      }
      start++;
    }

    if (end - start + 1 > max) {
      max = end - start + 1;
    }
  }

  return max;
}

console.log(fruits_into_baskets(['A', 'B', 'C', 'A', 'C']));
console.log(fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C']));
