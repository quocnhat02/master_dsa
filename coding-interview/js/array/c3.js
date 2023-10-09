// Maximum Subarray

/**
 * -2,1,-3,4,-1,2,1,-5,4
 * ans = -4
 * max = -1
 * i = 1, j = 2
 */

function maxSubarray(arr) {
  const length = arr.length;
  let max = arr[0];
  let sum = arr[0];
  let i = 0,
    j = 1;

  while (j <= length - 1) {
    if (i === j) {
      j++;
    } else {
      if (max <= sum + arr[j]) {
        sum += arr[j];
        max = sum;
        j++;
      } else {
        sum = sum - arr[i];
        i++;
      }
    }
  }

  return max;
}

function kanadeAlgo(arr) {
  let max = arr[0];
  let sum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (sum < 0) {
      sum = 0;
    }
    sum += arr[i];
    if (sum > max) {
      max = sum;
    }
  }

  return max;
}

console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(kanadeAlgo([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
