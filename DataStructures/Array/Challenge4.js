// Challenge 4: Array of Products of All Elements

function findProduct(arr) {
  let product = [],
    temp = 1;
  for (let i = 0; i < arr.length; i++) {
    product[i] = temp;
    temp *= arr[i];
  }
  temp = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    product[i] *= temp;
    temp *= arr[i];
  }

  return product;
}

console.log(findProduct([1, 2, 3, 4]));
console.log(findProduct([1, 2, 3, 4, 0]));
