// Challenge 7: Find Second Maximum Value in an Array
function findSecondMax1(arr) {
  return arr.sort((a, b) => a - b)[arr.length - 2];
}

function findSecondMax2(arr) {
  if (!arr || arr.length < 2 || !Array.isArray(arr)) {
    return null;
  }

  let max = 0;
  let secondMax = 0;

  for (const number of arr) {
    if (number > max) {
      secondMax = max;
      max = number;
    } else if (number > secondMax && number < max) {
      secondMax = number;
    }
  }

  return secondMax;
}

const arr = [9, 2, 3, 6];
// 6

console.log(findSecondMax1(arr));
console.log(findSecondMax2(arr));
