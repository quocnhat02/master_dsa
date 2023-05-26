// Pair with Target Sum (easy)

function findPairWithTargetSum(array, target) {
  let start = 0;
  let end = array.length - 1;
  let sum = 0;

  while (end !== start) {
    sum = array[start] + array[end];

    if (sum === target) {
      console.log('==');
      return [start, end];
    } else if (sum > target) {
      end--;
    } else {
      start++;
    }
  }

  return false;
}

console.log(findPairWithTargetSum([1, 2, 3, 4, 6], 6)); // [1, 3]
console.log(findPairWithTargetSum([2, 5, 9, 11], 11)); // [0, 2]
