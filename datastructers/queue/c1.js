// Challenge 1:​ Generate Binary Numbers From 1 to n Using Queue

function findBin(n) {
  const result = [];
  if (n < 1) {
    return result;
  }

  let bin = 1;
  result.push(bin.toString());

  for (let i = 1; i < n; i++) {
    bin = bin % 10 === 0 && bin > 1 ? bin + 1 : bin * 10;
    result.push(bin.toString());
  }

  return result;
}

const n = 7;

console.log(findBin(n));
