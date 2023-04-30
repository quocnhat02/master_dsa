// Challenge 10: Rearrange Sorted Array in Max/Min Form

function maxMin(arr) {
  let newArr = [];

  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    newArr.push(arr[arr.length - i - 1]);
    newArr.push(arr[i]);
  }

  if (arr.length % 2) {
    newArr.push(arr[Math.floor(arr.length / 2)]);
  }

  return newArr;
}

let arr = [1, 2, 3, 4, 5];

console.log(maxMin(arr));
