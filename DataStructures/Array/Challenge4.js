function findProduct1(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 1;
    for (let j = 0; j < arr.length; j++) {
      sum *= arr[j];
    }
    result.push(sum / arr[i]);
  }

  return result;
}

let arr = [1, 2, 3, 4];

console.log(findProduct1(arr));
