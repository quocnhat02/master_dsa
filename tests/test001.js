/*
Tìm kiếm:
    Tìm kiếm phần tử lớn nhất/nhỏ nhất trong mảng.
    Tìm kiếm phần tử có giá trị xác định trong mảng.
    Tìm kiếm số lần xuất hiện của một phần tử trong mảng.
*/

const findMin = (arr) =>
  arr.reduce((acc, cur) => (acc < cur ? acc : cur), arr[0]);

console.log(findMin([7, 4, 7, 9, 6, 8, 4, 2]));
