// Challenge 1: Remove Even Integers From an Array

function removeEven(arr) {
  let newArr = [];
  arr.forEach((element) => {
    if (element % 2 != 0) {
      newArr.push(element);
    }
  });

  return newArr;
}

const removeEven2 = (arr) => arr.filter((e) => e % 2 !== 0);

function removeEven3(arr) {
  let writeIndex = 0;

  arr.forEach((e, i) => {
    if (e % 2 !== 0) {
      arr[writeIndex] = e;
      writeIndex++;
    }
  });

  arr.length = writeIndex;
  return arr;
}

console.log(removeEven([1, 2, 4, 5, 10, 6, 3]));
console.log(removeEven2([1, 2, 4, 5, 10, 6, 3]));
console.log(removeEven3([1, 2, 4, 5, 10, 6, 3]));
