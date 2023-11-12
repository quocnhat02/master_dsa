// Challenge 9: Rearrange Positive & Negative Values

function reArrange(numbers) {
  let leftMostPos = 0,
    temp;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      if (i !== leftMostPos) {
        temp = numbers[i];
        numbers[i] = numbers[leftMostPos];
        numbers[leftMostPos] = temp;
      }
      leftMostPos++;
    }
  }

  return numbers;
}

const arr = [10, -1, 20, 4, 5, -9, -6];

console.log(reArrange(arr));
