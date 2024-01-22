// Challenge 9: Rearrange Positive & Negative Values
// function rearrange_neg_pos_value(array) {
//   const length = array.length;
//   const rearrange = new Array(length).fill(0);
//   let idx_start = 0,
//     idx_end = length - 1;

//   for (const elm of array) {
//     if (elm < 0) {
//       rearrange[idx_start] = elm;
//       idx_start++;
//     } else {
//       rearrange[idx_end] = elm;
//       idx_end--;
//     }
//   }

//   return rearrange;
// }

function rearrange_neg_pos_value(array) {
  const pos = [];
  const neg = [];

  for (const elm of array) {
    if (elm < 0) {
      neg.push(elm);
    } else {
      pos.push(elm);
    }
  }

  return neg.concat(pos);
}

console.log(rearrange_neg_pos_value([10, -1, 20, 4, 5, -9, -6]));
