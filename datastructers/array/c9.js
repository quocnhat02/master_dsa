// Challenge 9: Rearrange Positive & Negative Values

function reArrange(arr) {
  let negArr = [];
  let posArr = [];

  for (const num of arr) {
    if (num >= 0) {
      posArr.push(num);
    } else {
      negArr.push(num);
    }
  }

  return negArr.concat(posArr);
}

const arr = [10, -1, 20, 4, 5, -9, -6];

console.log(reArrange(arr));
