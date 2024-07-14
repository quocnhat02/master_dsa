function findProducts(arr) {
  const products = new Array(arr.length).fill(1);
  let prev = 1 * arr[0];
  let tmp = 1;

  for (let i = 1; i < arr.length; i++) {
    tmp *= prev;
    products[i] = tmp;
    prev = arr[i];
  }

  prev = 1 * arr[arr.length - 1];
  tmp = 1;

  for (let i = arr.length - 2; i >= 0; i--) {
    tmp *= prev;
    products[i] *= tmp;
    prev = arr[i];
  }

  return products;
}

console.log(findProducts([1, 2, 3, 4]));
