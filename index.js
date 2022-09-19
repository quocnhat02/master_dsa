function containsCommonItem1(arr1, arr2) {
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

function containsCommonItem2(arr1, arr2) {
  const object = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!object[arr1[i]]) {
      const item = arr1[i];
      object[item] = true;
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (object[arr2[j]]) {
      return true;
    }
  }
  return -1;
}

// O(a + b)

function containsCommonItem3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

const arr1 = ['1', 'b', 'c', 'd'];
const arr2 = [1, 'cd', 'r', 'x'];

console.log(containsCommonItem1(arr1, arr2));
console.log(containsCommonItem2(arr1, arr2));
console.log(containsCommonItem3(arr1, arr2));
