// given an array of integers, find min and max value

function findMinMax(numbers) {
  let min = numbers[0],
    max = numbers[0];

  for (let idx = 1; idx < numbers.length; idx++) {
    const element = numbers[idx];
    if (element > max) {
      max = element;
    }
    if (element < min) {
      min = element;
    }
  }

  return `Minimum: ${min}, Maximum: ${max}`;
}

console.log(findMinMax([5, 2, 9, 1, 7]));
