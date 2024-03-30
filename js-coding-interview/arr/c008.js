// Challenge: Array of Products of All Elements

function findProduct(arr) {
  const length = arr.length;
  if (length < 2) {
    return;
  }
  const products = [];
  let prevNum = 1;

  for (const num of arr) {
    products.push(prevNum);
    prevNum *= num;
  }

  prevNum = 1;
  for (let idx = length - 1; idx >= 0; idx--) {
    const element = arr[idx];
    products[idx] *= prevNum;
    prevNum *= element;
  }

  return products;

  // [1,2,3,4]
  // [1,1,2,6]
  // [24,12,8,6]
}

console.log(findProduct([1, 2, 3, 4]));
