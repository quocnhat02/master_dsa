// Challenge 10: Rearrange Sorted Array in Max/Min Form

function maxMin1(arr) {
  let newArr = [];
  let max = arr.length - 1;
  let min = 0;

  while (max >= min) {
    if (max !== min) {
      newArr.push(arr[max]);
      newArr.push(arr[min]);
    } else {
      newArr.push(arr[min]);
    }
    max -= 1;
    min += 1;
  }

  return newArr;
}

function maxMin2(arr) {
  var result = [];
  for (var i = 0; i < Math.floor(arr.length / 2); i++) {
    result.push(arr[arr.length - (i + 1)]);
    result.push(arr[i]);
  }

  return arr.length % 2 ? result.push(arr[Math.floor(arr.length / 2)]) : result;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(maxMin1(arr));
console.log(maxMin2(arr));
