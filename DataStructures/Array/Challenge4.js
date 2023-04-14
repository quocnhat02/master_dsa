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

function findProduct2(arr) {
  let t = 1,
    result = [];
  for (let i = 0; i < arr.length; i++) {
    t *= arr[i];
  }

  for (let j = 0; j < arr.length; j++) {
    result.push(t / arr[j]);
  }

  return result;
}

function findProduct3(arr) {
  let t = arr.reduce((acc, cur) => acc * cur, 1);

  return arr.map((val) => t / val);
}

let arr = [1, 2, 3, 4];

console.log(findProduct1(arr));
console.log(findProduct2(arr));
console.log(findProduct3(arr));
