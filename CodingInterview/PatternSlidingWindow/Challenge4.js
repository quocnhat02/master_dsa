// Fruits into Baskets (medium)

function findMaximum(array) {
  let max = 0;
  let start = 0;
  let bag = {};

  for (let end = 0; end < array.length; end++) {
    if (!bag[array[end]]) {
      bag[array[end]] = 1;
    } else {
      bag[array[end]]++;
    }

    while (Object.keys(bag).length > 2) {
      bag[array[start]]--;

      if (bag[array[start]] === 0) {
        delete bag[array[start]];
      }

      start++;
    }

    if (max < end - start + 1) {
      max = end - start + 1;
    }
  }

  return max;
}

console.log(findMaximum(['A', 'B', 'C', 'A', 'C'])); // ['C', 'A', 'C']
console.log(findMaximum(['A', 'B', 'C', 'B', 'B', 'C'])); // ['B', 'C', 'B', 'B', 'C']
