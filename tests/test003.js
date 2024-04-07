/*
Kết hợp mảng:
    Ghép hai mảng thành một mảng mới.
    Nối mảng B vào mảng A mà không sử dụng phương thức array.concat().
*/

function mergeArray(arr1, arr2) {
  return arr1.concat(arr2);
  //   return [...arr1, ...arr2];
}

console.log(mergeArray([1, 2, 3], [4, 5, 6]));
