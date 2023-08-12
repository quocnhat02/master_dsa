// Challenge 1: Remove Even Integers From an Array

function removeEvenNumber1(array) {
  const oddArray = [];
  for (const number of array) {
    if (number % 2 !== 0) {
      oddArray.push(number);
    }
  }

  return oddArray;
}

function removeEvenNumber2(array) {
  return array.filter((number) => number % 2 !== 0);
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(removeEvenNumber1(array));
console.log(removeEvenNumber2(array));
