function removeEven(arr) {
  // return arr.filter((num) => num % 2 !== 0);
  let end = 0;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element % 2 !== 0) {
      if (end !== i) {
        arr[end] = element;
      }
      end++;
    }
  }

  arr.length = end;

  return arr;
}

console.log(removeEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 14, 17]));
