// function binarySearch(arr, n, t, l = 0, r = n - 1) {
//   let m = Number.parseInt((l + r) / 2);
//   if (arr[m] === t) {
//     return m;
//   } else if (arr[m] > t) {
//     return binarySearch(arr, n, t, 0, m - 1);
//   } else if (arr[m] < t) {
//     return binarySearch(arr, n, t, m + 1, n);
//   } else {
//     return -1;
//   }
// }

// function binarySearch(arr, target) {
//   let leftIndex = 0;
//   let rightIndex = arr.length - 1;

//   while (leftIndex <= rightIndex) {
//     let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
//     if (target === arr[middleIndex]) {
//       return middleIndex;
//     } else if (target < arr[middleIndex]) {
//       rightIndex = middleIndex - 1;
//     } else {
//       leftIndex = middleIndex + 1;
//     }
//   }

//   return -1;
// }

function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) {
    return middleIndex;
  }

  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}

function swap(a, b) {
  let temp = a;
  a = b;
  b = temp;
}

function sortArray(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        swap(arr[i], arr[j]);
      }
    }
  }
}

let arr = [-5, 2, 4, 6, 10];
console.log(recursiveBinarySearch(arr, 10));
console.log(recursiveBinarySearch(arr, 6));
console.log(recursiveBinarySearch(arr, 20));