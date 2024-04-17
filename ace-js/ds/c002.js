function removeEven(numbers) {
  return numbers.filter((number) => number % 2 !== 0);
}

console.log(removeEven([1, 2, 3, 4, 5]));
