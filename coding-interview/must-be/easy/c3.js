function squares(arr) {
  const numbers = arr;
  const squares = [];

  let indexN = -1;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
      break;
    } else {
      indexN++;
    }
  }

  if (!indexN) {
    for (const number of numbers) {
      squares.push(number * number);
    }
  } else {
    let indexP = indexN + 1;

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[indexP] > Math.abs(numbers[indexN]) && numbers[indexN]) {
        squares.push(numbers[indexN] * numbers[indexN]);
        indexN--;
      } else {
        squares.push(numbers[indexP] * numbers[indexP]);
        indexP++;
      }
    }
  }

  return squares;
}

// const arr = [-4, -1, 0, 3, 10, 11];
const arr = [-7, -3, 2, 3, 11];
console.log(squares(arr));
