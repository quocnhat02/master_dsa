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

console.log(findFirstUnique([9, 2, 3, 2, 6, 6]));
