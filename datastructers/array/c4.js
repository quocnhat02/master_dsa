// Challenge 4: Array of Products of All Elements

function findProduct(array) {
  if (!array || array.length <= 1) {
    return null;
  }

  const products = [];
  let prev = 1;

  for (let i = 0; i < array.length; i++) {
    products[i] = 1 * prev;
    prev *= array[i];
  }

  prev = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    products[i] *= prev;
    prev *= array[i];
  }

  return products;
}

const arr = [1, 2, 3, 4];
// arr = [24,12,8,6]

console.log(findProduct(arr));
console.log(findProduct([4, 2, 1, 5, 0]));
