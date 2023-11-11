// Product Of Array Except Self
function findProExceptSelf(numbers) {
  const length = numbers.length;
  let currentProduct = 1;
  const resultArray = [];
  for (let i = 0; i < length; i++) {
    resultArray.push(currentProduct);
    currentProduct *= numbers[i];
  }

  currentProduct = 1;
  for (let i = length - 1; i >= 0; i--) {
    resultArray[i] *= currentProduct;
    currentProduct *= numbers[i];
  }

  return resultArray.map((num) => (Object.is(num, -0) ? 0 : num));
}

const numbers1 = [1, 2, 3, 4];
const numbers2 = [-1, 1, 0, -3, 3];

// console.log(findProExceptSelf(numbers1));
console.log(findProExceptSelf(numbers2));
