// Challenge 10: Rearrange Sorted Array in Max/Min Form

function maxMin(arr) {
  const length = arr.length;
  const result = [];
  let start = 0;
  let end = length - 1;

  for (let i = 0; i < length; i++) {
    if (i % 2 === 0) {
      result.push(arr[end--]);
    } else {
      result.push(arr[start++]);
    }
  }

  return result;
}

const arr = [1, 2, 3, 4, 5];

console.log(maxMin(arr));
