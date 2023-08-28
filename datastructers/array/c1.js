// Challenge 1: Remove Even Integers From an Array

function removeEven1(arr) {
  return arr.filter((num) => num % 2 !== 0);
}

function removeEven2(arr) {
  let oddsNum = [];
  for (let num of arr) {
    if (num % 2 !== 0) {
      oddsNum.push(num);
    }
  }

  return oddsNum;
}

function removeEven3(arr) {
  return arr.reduce(
    (result, num) => (num % 2 !== 0 ? [...result, num] : result),
    []
  );
}

const arr = [1, 2, 4, 5, 10, 6, 3];

console.log(removeEven1(arr));
console.log(removeEven2(arr));
console.log(removeEven3(arr));
