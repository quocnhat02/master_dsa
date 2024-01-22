// Challenge 1: Remove Even Integers From an Array
function rmEvenNum(numbers) {
  return numbers.filter((num) => num % 2 !== 0);
}

console.log(rmEvenNum([1, 2, 3, 4, 5, 6]));
