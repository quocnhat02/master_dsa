// 01. Two Number Sum

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return mid;
    } else if (array[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

function calcTwoNumberSumWithTarget1(array, sum) {
  array = array.sort((a, b) => a - b);

  for (let index = 0; index < array.length; index++) {
    const foundNumber = binarySearch(array, sum - array[index]);

    if (foundNumber !== -1) {
      return [index, foundNumber];
    }
  }

  return -1;
}

function calcTwoNumberSumWithTarget2(array, sum) {
  array = array.sort((a, b) => a - b);
  let start = 0;
  let finish = array.length - 1;

  while (start < finish) {
    if (array[start] + array[finish] === sum) {
      return [start, finish];
    } else if (array[start] + array[finish] > sum) {
      finish--;
    } else {
      start++;
    }
  }

  return -1;
}

console.log(calcTwoNumberSumWithTarget1([3, 5, -4, 8, 11, 1, -1, 6], 10));
console.log(calcTwoNumberSumWithTarget2([3, 5, -4, 8, 11, 1, -1, 6], 10));
