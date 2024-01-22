// Challenge 4: Array of Products of All Elements
function find_products(products) {
  const length = products.length;
  const result = new Array(length).fill(1);
  let prev_mul = 1;

  for (let idx = 1; idx < length; idx++) {
    result[idx] = prev_mul;
    prev_mul *= products[idx];
  }

  prev_mul = products[length - 1];

  for (let idx = length - 2; idx >= 0; idx--) {
    result[idx] *= prev_mul;
    prev_mul *= products[idx];
  }

  return result;
}

console.log(find_products([1, 2, 3, 4]));
