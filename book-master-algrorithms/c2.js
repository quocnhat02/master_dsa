// given an array of integers, calculate the sum of all elements and
// the average value of the elements within the array

function findSumAndAverage(numbers) {
  const length = numbers.length;
  let sum = 0,
    average = 0;

  for (let idx = 0; idx < length; idx++) {
    const element = numbers[idx];
    sum += element;
  }

  average = sum / length;

  return `Sum: ${sum}, Average: ${average}`;
}

console.log(findSumAndAverage([5, 2, 9, 1, 7]));
