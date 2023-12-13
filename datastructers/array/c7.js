// Challenge 7: Find Second Maximum Value in an Array

function findSecondMax(arr) {
  let max = 0;
  let secondMax = 0;

  for (const num of arr) {
    max = Math.max(max, num);
    if (num > secondMax && num !== max) {
      secondMax = num;
    }
  }

  return secondMax;
}

console.log(findSecondMax([9, 2, 3, 6, 4]));
