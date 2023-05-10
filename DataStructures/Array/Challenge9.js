// Challenge 9: Rearrange Positive & Negative Values

// function reArrange(arr) {
//   var neg = [];
//   var pos = [];
//   for (let ele of arr) {
//     if (ele < 0) neg.push(ele);
//     else pos.push(ele);
//   }
//   return neg.concat(pos);
// }

function reArrange(arr) {
  let ne = [];
  let po = [];
  let hasZero = false;

  for (let num of arr) {
    if (num < 0) {
      ne.push(num);
    } else if (num > 0) {
      po.push(num);
    } else {
      hasZero = true;
    }
  }

  if (hasZero) {
    ne.push(0);
  }

  return ne.concat(po);
}

let arr = [10, -1, 20, 4, 5, -9, 0, -6];

console.log(reArrange(arr));
