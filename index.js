// You have give an array of characters where each character represents a fruit.
// You have 2 baskets, find max number of fruits.
// Each baskets can only hold a single type of fruit.

// fruitMap = {}, pre_idx = 0, max = 0
// 'abcabaaad' => 'abaaa'
// { b: 1, c: 1}

function findMaxNumberFruits(fruits) {
  const length = fruits.length;

  let pre_idx = 0,
    max = 0;
  const fruitMap = new Map();

  for (let idx = 0; idx < length; idx++) {
    const rightFruit = fruits.charAt(idx);
    fruitMap.set(rightFruit, (fruitMap.get(rightFruit) || 0) + 1);

    while (fruitMap.size > 2) {
      const leftFruit = fruits.charAt(pre_idx);
      fruitMap.set(leftFruit, fruitMap.get(leftFruit) - 1);

      if (fruitMap.get(leftFruit) === 0) {
        fruitMap.delete(leftFruit);
      }
      pre_idx++;
    }

    max = Math.max(max, idx - pre_idx + 1);
  }

  return max;
}

console.log(findMaxNumberFruits('abcacaaad', 2));
