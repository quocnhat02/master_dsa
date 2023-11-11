// Single number
function findSingleNum(numbers) {
  const length = numbers.length;
  let result = numbers[0];

  for (let i = 1; i < length; i++) {
    result = result ^ numbers[i];
  }

  return result;
}

const numbers = [4, 1, 2, 1, 2];

console.log(findSingleNum(numbers));
