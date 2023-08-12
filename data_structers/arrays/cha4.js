// Challenge 4: Array of Products of All Elements

function findProduct(arr) {
  let tempt = 1;

  const products = [];

  for (let i = 0; i < arr.length; i++) {
    products.push(tempt);
    tempt *= arr[i];
  }

  tempt = 1;

  for (let j = arr.length - 1; j >= 0; j--) {
    products[j] *= tempt;
    tempt *= arr[j];
  }

  return products;
}

const arr = [1, 2, 3, 4];

/**
 * 1 1 2 6
 * 24 12 8 6
 */

console.log(findProduct(arr));
