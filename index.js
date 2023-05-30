function linearSearch(array, target) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === target) {
      return index;
    }
  }
  return -1;
}

// console.log(linearSearch([1, 2, 3, 4, 5], 6));

function largestNumber(array) {
  let max = array[0];

  for (let index = 1; index < array.length; index++) {
    if (max < array[index]) {
      max = array[index];
    }
  }

  return max;
}

// console.log(largestNumber([1, 2, 5, 8, 7]));

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((right + left) / 2);
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

// console.log(binarySearch([2, 4, 6, 8, 10], 10));

function reverseArray(array) {
  let reversedArray = [];
  for (let index = array.length - 1; index >= 0; index--) {
    reversedArray.push(array[index]);
  }
  return reversedArray;
}

function reverseArray2(array) {
  let first = 0,
    last = array.length - 1,
    temp;

  while (first < last) {
    temp = array[last];
    array[last] = array[first];
    array[first] = temp;
    first++;
    last--;
  }

  return array;
}

// console.log(reverseArray([1, 2, 3, 4, 5]));
// console.log(reverseArray2([1, 2, 3, 4, 5]));

function kadaneAlgorithm2(array, start_index, finish_index) {
  let max_so_far = 0;
  let max_ending_here = 0;
  let start_index_temp = -1;

  for (let i = 0; i < array.length; i++) {
    max_ending_here += array[i];
    if (max_ending_here <= 0) {
      max_ending_here = 0;
      start_index_temp = -1;
    } else {
      if (start_index_temp === -1) {
        start_index_temp = i;
      }
      if (max_so_far < max_ending_here) {
        max_so_far = max_ending_here;
        start_index = start_index_temp;
        finish_index = i;
      }
    }
  }
  return max_so_far;
}

function kadaneAlgorithm(array) {
  let cs = 0;
  let ms = 0;

  for (let i = 0; i < array.length; i++) {
    cs += array[i];
    if (cs <= 0) {
      cs = 0;
    } else {
      if (ms < cs) {
        ms = cs;
      }
    }
  }

  return ms;
}

// console.log(kadaneAlgorithm([31, -41, 59, 26, -53, 58, 97, -93, -23, 84]));
// console.log(kadaneAlgorithm([-2, -3, 4, -1, -2, 1, 5, -3]));
