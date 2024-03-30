// Challenge: Remove Even Integers From an Array

function removeEven(numbers) {
  const oddNumbers = [];
  for (const number of numbers) {
    if (number % 2 !== 0) {
      oddNumbers.push(number);
    }
  }

  return oddNumbers;
}

function rmEvens(numbers) {
  return numbers.filter((num) => num % 2 !== 0);
}

console.log(removeEven([1, 2, 4, 5, 10, 6, 3]));
console.log(rmEvens([1, 2, 4, 5, 10, 6, 3]));
