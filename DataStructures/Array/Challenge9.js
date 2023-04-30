// Challenge 9: Rearrange Positive & Negative Values

function reArrange(arr) {
  var neg = [];
  var pos = [];
  for (let ele of arr) {
    if (ele < 0) neg.push(ele);
    else pos.push(ele);
  }
  return neg.concat(pos);
}

let arr = [10, -1, 20, 4, 5, -9, -6];

console.log(reArrange(arr));
