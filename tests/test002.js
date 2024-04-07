/*
Sắp xếp:
    Sắp xếp mảng theo thứ tự tăng/giảm dần.
    Sắp xếp mảng sử dụng các thuật toán Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, Radix Sort.
    Sắp xếp mảng sao cho tất cả các số chẵn nằm trước các số lẻ.
*/

const sortAsc = (arr) => {
  return arr.sort((a, b) => a - b);
};

console.log(sortAsc([5, 3, 8, 9, 0, 2, 4]));

const sortDes = (arr) => {
  return arr.sort((a, b) => b - a);
};

console.log(sortDes([5, 3, 8, 9, 0, 2, 4]));
