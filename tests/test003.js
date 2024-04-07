/*
Kết hợp mảng:
    Ghép hai mảng thành một mảng mới.
    Nối mảng B vào mảng A mà không sử dụng phương thức array.concat().
*/

function mergeArray(arr1, arr2) {
  return arr1.concat(arr2);
  //   return [...arr1, ...arr2];
}

// console.log(mergeArray([1, 2, 3], [4, 5, 6]));

/*
Xoay mảng:
    Xoay mảng sang trái/phải một số lượng lần nhất định.
    Đảo ngược mảng.
*/

function rotateLeft(arr, n) {
  return arr.slice(-n).concat(arr.slice(0, arr.length - n));
}

// console.log(rotateLeft([1, 2, 3, 4, 5], 3));

function rotateRight(arr, n) {
  return arr.slice(n).concat(arr.slice(0, n));
}

// console.log(rotateRight([1, 2, 3, 4, 5], 3));

function reverseArr(arr) {
  return arr.reverse();
}

console.log(reverseArr([1, 2, 3, 4, 5]));
