function removeEven(numbers) {
  return numbers.filter((number) => number % 2 !== 0);
}

// console.log(removeEven([1, 2, 3, 4, 5]));

function mergeSorted(arr1, arr2) {
  let left1 = 0,
    left2 = 0;
  const length = arr1.length + arr2.length;
  const merged = [];

  while (left1 + left2 < length) {
    if (arr1[left1] < arr2[left2] || !arr2[left2]) {
      merged.push(arr1[left1]);
      left1++;
    } else {
      merged.push(arr2[left2]);
      left2++;
    }
  }

  return merged;
}

// console.log(mergeSorted([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]));

function findTwoSum(arr, target) {
  const saveNum = new Set();
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    const value = target - arr[i];
    if (saveNum.has(value)) {
      return [value, arr[i]];
    }
    saveNum.add(arr[i]);
  }

  return [];
}

// console.log(findTwoSum([1, 21, 3, 14, 5, 60, 7, 6], 81));

function findProducts(arr) {
  const len = arr.length;
  let prevLeft = 1,
    prevRight = 1;
  const products = new Array(len).fill(1);

  for (let i = 0; i < len; i++) {
    products[i] *= prevLeft;
    prevLeft *= arr[i];

    products[len - 1 - i] *= prevRight;
    prevRight *= arr[len - 1 - i];
  }

  return products;
}

// console.log(findProducts([1, 2, 3, 4]));
// console.log(findProducts([4, 2, 1, 5, 0]));

function findMin(arr) {
  return arr.reduce((pre, cur) => Math.min(pre, cur), arr[0]);
}

// console.log(findMin([9, 2, 3, 6]));

function findFirstUnique(arr) {
  const countMap = new Map();
  for (const number of arr) {
    countMap.set(number, (countMap.get(number) || 0) + 1);
  }

  for (const [key, value] of countMap) {
    if (value === 1) {
      return key;
    }
  }

  return null;
}

// console.log(findFirstUnique([9, 2, 3, 2, 6, 6]));

function findSecondMax(arr) {
  if (arr.length < 2) return -1;
  let result = arr.reduce(
    (pre, cur) => {
      pre[1] = Math.max(cur, pre[1]);
      pre[0] = cur > pre[0] && cur !== pre[1] ? cur : pre[0];
      return pre;
    },
    [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY] // [second_max, maximum]
  );
  return result[0] !== result[1] && result[0] !== Number.NEGATIVE_INFINITY
    ? result[0]
    : -1;
}

// console.log(findSecondMax([9, 2, 3, 4, 6]));

function rotateRight(arr, n) {
  return arr.slice(arr.length - n).concat(arr.slice(0, arr.length - n));
}

// 1 2 3 4 5
// 5 4 3 2 1
// 3 4 5 1 2

// console.log(rotateRight([1, 2, 3, 4, 5], 3));

function arrangeNegToPos(arr) {
  let start = 0,
    end = arr.length - 1,
    left = 0;

  while (start < end) {
    if (arr[start] < 0) {
      start++;
    }

    if (arr[end] >= 0) {
      end--;
    }

    if (arr[end] < 0 || arr[start] >= 0) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  return arr;
}

// console.log(arrangeNegToPos([10, -1, 20, 4, 5, -9, -6]));

function maxMin(arr) {
  let left = 0,
    right = arr.length - 1;

  return arr.map((_, i) => {
    return i % 2 === 0 ? arr[right--] : arr[left++];
  }, []);
}

// console.log(maxMin([1, 2, 3, 4, 5]));

function maxSumSub(arr) {
  let sum = 0,
    max = arr[0];

  for (const num of arr) {
    sum += num;

    if (sum < 0) {
      sum = 0;
    }

    max = Math.max(max, sum);
  }

  return max;
}

console.log(maxSumSub([-4, 2, -5, 1, 2, 3, 6, -5, 1]));
