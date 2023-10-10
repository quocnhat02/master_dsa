// single number

function singleNumber1(arr) {
  let single = 0;

  for (const number of arr) {
    single ^= number;
  }

  return single;
}

function singleNumber2(arr) {
  return arr.reduce((res, cur) => res ^ cur, 0);
}

function singleNumber3(arr) {
  const numberExist = new Set();
  return arr.reduce((res, cur) => {
    if (numberExist.has(cur)) {
      res -= cur;
    } else {
      numberExist.add(cur);
      res += cur;
    }
    return res;
  }, 0);
}

// console.log(singleNumber1([2, 2, 1]));
// console.log(singleNumber1([4, 1, 2, 1, 2]));
// console.log(singleNumber1([1]));

// console.log(singleNumber2([2, 2, 1]));
// console.log(singleNumber2([4, 1, 2, 1, 2]));
// console.log(singleNumber2([1]));

console.log(singleNumber3([2, 2, 1]));
console.log(singleNumber3([4, 1, 2, 1, 2]));
console.log(singleNumber3([1]));
