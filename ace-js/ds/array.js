function findProducts(arr) {
  const products = new Array(arr.length).fill(1);
  let prev = 1 * arr[0],
    tmp1 = 1,
    after = 1 * arr[arr.length - 1],
    tmp2 = 1;

  for (let i = 1; i < arr.length; i++) {
    tmp1 *= prev;
    products[i] *= tmp1;
    prev = arr[i];

    tmp2 *= after;
    products[arr.length - 1 - i] *= tmp2;
    after = arr[arr.length - 1 - i];
  }

  return products;
}

console.log(findProducts([1, 2, 3, 4]));
