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

console.log(removeEven([1, 2, 4, 5, 10, 6, 3]));
