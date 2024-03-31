function findMaxSumSub(arr) {
  let sum = 0,
    max = arr[0];

  for (const elm of arr) {
    sum += elm;
    max = Math.max(max, sum);
    if (sum < 0) {
      sum = 0;
    }
  }

  return max;
}

console.log(findMaxSumSub([-2, 10, 7, -5, 15, 6]));
console.log(findMaxSumSub([-4, 2, -5, 1, 2, 3, 6, -5, 1]));

// [-2,10,7,-5,15,6]
//                ^

// sum = 33, max = 33
