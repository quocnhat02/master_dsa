// Challenge 4: Array of Products of All Elements

function findProduct(numbers) {
  const length = numbers.length;
  const products = [];
  let currentProduct = 1;

  for (const number of numbers) {
    products.push(currentProduct);
    currentProduct *= number;
  }

  currentProduct = 1;
  for (let i = length - 1; i >= 0; i--) {
    products[i] *= currentProduct;
    currentProduct *= numbers[i];
  }

  return products;
}

const arr = [1, 2, 3, 4];

console.log(findProduct(arr));
