/*
Sắp xếp:
    Sắp xếp mảng theo thứ tự tăng/giảm dần.
    Sắp xếp mảng sử dụng các thuật toán Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, Radix Sort.
    Sắp xếp mảng sao cho tất cả các số chẵn nằm trước các số lẻ.
*/

const sortAsc = (arr) => {
  return arr.sort((a, b) => a - b);
};

// console.log(sortAsc([5, 3, 8, 9, 0, 2, 4]));

const sortDes = (arr) => {
  return arr.sort((a, b) => b - a);
};

// console.log(sortDes([5, 3, 8, 9, 0, 2, 4]));

const bubbleSort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
};

// console.log(bubbleSort([4, 6, 8, 2, 4, 5, 6, 9]));

const selectionSort = (arr) => {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
};

// console.log(selectionSort([3, 51, 2, 6, 3, 4, 8]));

const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

// console.log(quickSort([4, 6, 7, 3, 2, 1, 5, 9]));

const sortEvenAndOddNum = (arr) => {
  let left = 0,
    right = arr.length - 1,
    index = 0,
    result = new Array(arr.length).fill(0);
  while (left <= right) {
    if (arr[index] % 2 === 0) {
      result[left] = arr[index];
      left++;
    } else {
      result[right] = arr[index];
      right--;
    }
    index++;
  }

  return result;
};

console.log(sortEvenAndOddNum([5, 3, 5, 8, 7, 3, 2, 0]));
