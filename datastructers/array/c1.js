// Challenge 1: Remove Even Integers From an Array

function removeIntegers1(array) {
  return array.filter((num) => num % 2 !== 0);
}

function removeIntegers2(array) {
  return array.reduce((result, currentNumber) => {
    if (currentNumber % 2 !== 0) {
      result.push(currentNumber);
    }
    return result;
  }, []);
}

const array = [1, 2, 4, 5, 10, 6, 3];

console.log(removeIntegers1(array));
console.log(removeIntegers2(array));
