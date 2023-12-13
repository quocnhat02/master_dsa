// Challenge 4: Array of Products of All Elements

function findProducts(arr) {
  const products = [];
  let preSave = 1;

  for (const number of arr) {
    products.push(preSave);
    preSave *= number;
  }

  preSave = 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    products[i] *= preSave;
    preSave *= arr[i];
  }

  return products;
}

console.log(findProducts([1, 2, 3, 4]));
