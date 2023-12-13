// Challenge 7: Find Second Maximum Value in an Array

function findSecondMax(arr) {
  let max = -Infinity;
  let secondMax = -Infinity;

  for (const num of arr) {
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && num !== max) {
      secondMax = num;
    }
  }

  return secondMax;
}

console.log(findSecondMax([9, 2, 3, 6, 4]));
