// Challenge 4: Array of Products of All Elements

function findProduct(array) {
  let newArr = [];
  let temp = 1;

  for (let i = 0; i < array.length; i++) {
    newArr.push(temp);
    temp *= array[i];
  }

  temp = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    newArr[i] *= temp;
    temp *= array[i];
  }

  return newArr;
}

console.log(findProduct([1, 2, 3, 4]));
console.log(findProduct([1, 2, 3, 4, 0]));
