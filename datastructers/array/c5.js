// Challenge 5: Find Minimum Value in Array

function findMin(numbers) {
  return numbers.reduce((res, cur) => Math.min(res, cur));
}

const arr = [9, 2, 3, 6];

console.log(findMin(arr));
