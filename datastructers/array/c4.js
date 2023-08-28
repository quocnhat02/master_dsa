// Challenge 4: Array of Products of All Elements

function findProduct(arr) {
  let prevPoint = 1;

  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(prevPoint);
    prevPoint *= arr[i];
  }

  prevPoint = 1;

  for (let j = arr.length - 1; j >= 0; j--) {
    newArr[j] *= prevPoint;
    prevPoint *= arr[j];
  }

  return newArr;
}

const arr = [1, 2, 3, 4];

console.log(findProduct(arr));
