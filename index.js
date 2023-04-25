function containItem1(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }

  return false;
}

// O(n^2)

function containItem2(arr1, arr2) {
  let obj = {};

  arr1.forEach((element) => {
    if (!obj[element]) obj[element] = true;
  });

  for (let element of arr2) {
    if (obj[element]) {
      return true;
    }
  }

  return false;
}

// O(n)

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 4];

console.log(containItem1(arr1, arr2));
console.log(containItem2(arr1, arr2));
