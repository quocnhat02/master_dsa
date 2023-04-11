// Challenge 1: Remove Even Integers From an Array

function removeEven1(arr) {
  let arrNew = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) arrNew.push(arr[i]);
  }

  return arrNew;
}

const removeEven2 = (arr) => arr.filter((n) => n % 2 != 0);

console.log(removeEven2([1, 2, 4, 5, 10, 6, 3]));
