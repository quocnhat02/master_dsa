function findProduct1(arr) {
  let result = [],
    left = 1;
  for (let i = 0; i < arr.length; i++) {
    let cur = 1;
    for (let j = i + 1; j < arr.length; j++) {
      cur *= arr[j];
    }
    result.push(cur * left);
    left *= arr[i];
  }

  return result;
}

function findProduct2(arr) {
  const len = arr.length;
  const productExceptAtIndex = new Array(len).fill(1);

  let productSoFar = 1;
  for (let i = 0; i < len; i++) {
    productExceptAtIndex[i] = productSoFar;
    productSoFar *= arr[i];
  }

  productSoFar = 1;
  for (let i = len - 1; i >= 0; i--) {
    productExceptAtIndex[i] *= productSoFar;
    productSoFar *= arr[i];
  }

  return productExceptAtIndex;
}

let arr = [1, 2, 3, 4];

console.log(findProduct1(arr));
console.log(findProduct2(arr));
