function findFirstRepeatNumber(array) {
  let map = {};

  for (let i = 0; i < array.length; i++) {
    if (map[array[i]]) {
      return array[i];
    }
    map[array[i]] = true;
  }

  return undefined;
}

let arr1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
let arr2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
let arr3 = [1, 2, 3];

console.log(findFirstRepeatNumber(arr1));
console.log(findFirstRepeatNumber(arr2));
console.log(findFirstRepeatNumber(arr3));
