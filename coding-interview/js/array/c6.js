//  Max Consecutive Ones
function findMaxConsecutiveOnes(numbers) {
  const length = numbers.length;
  let max = 0;
  let sum = 0;

  for (let i = 0; i < length; i++) {
    sum = numbers[i] ? sum + numbers[i] : 0;
    max = Math.max(sum, max);
  }

  return max;
}

const numbers1 = [1, 1, 0, 1, 1, 1];
const numbers2 = [1, 0, 1, 1, 0, 1];

console.log(findMaxConsecutiveOnes(numbers1));
console.log(findMaxConsecutiveOnes(numbers2));
