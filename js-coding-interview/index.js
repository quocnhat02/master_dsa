function decimalToBinary(val) {
  if (val <= 1) {
    return String(val);
  }
  return decimalToBinary(Math.floor(val / 2)) + decimalToBinary(val % 2);
}

function binaryToDecimal(val) {
  let decimal = 0,
    idx = 0;
  while (val !== 0) {
    decimal += (val % 10) * Math.pow(2, idx);
    val = Math.floor(val / 10);
    idx++;
  }

  return decimal;
}

console.log(decimalToBinary(10));
console.log(binaryToDecimal(1010));
