// Fruits into Baskets (medium)

/*
    Input: Fruit=['A', 'B', 'C', 'A', 'C']
    Output: 3
    Explanation: We can put 2 'C' in one basket and one 'A' 
    in the other from the subarray ['C', 'A', 'C']
*/

function findMostFruits(fruits) {
  if (!fruits || fruits.length <= 0 || !Array.isArray(fruits)) {
    return 0;
  }

  const length = fruits.length;
  const fruitCount = new Map();
  let windowStart = 0;
  let max = 0;

  for (let windowEnd = 0; windowEnd < length; windowEnd++) {
    const fruitRight = fruits[windowEnd];
    fruitCount.set(fruitRight, (fruitCount.get(fruitRight) || 0) + 1);
    while (fruitCount.size > 2) {
      const fruitLeft = fruits[windowStart];
      fruitCount.set(fruitLeft, fruitCount.get(fruitLeft) - 1);

      if (fruitCount.get(fruitLeft) === 0) {
        fruitCount.delete(fruitLeft);
      }

      windowStart++;
    }

    max = Math.max(max, windowEnd - windowStart + 1);
  }

  return max;
}

console.log(findMostFruits(['A', 'B', 'C', 'A', 'C'])); // 3
console.log(findMostFruits(['A', 'B', 'C', 'B', 'B', 'C'])); // 5
