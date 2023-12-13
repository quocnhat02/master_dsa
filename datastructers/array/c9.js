// Challenge 9: Rearrange Positive & Negative Values

function rearrange(arr) {
  const neg = [];

  const pos = arr.filter((num) => {
    if (num < 0) {
      neg.push(num);
    }
    return num >= 0;
  });

  return neg.concat(pos);
}

console.log(rearrange([10, -1, 20, 4, 5, -9, -6]));
