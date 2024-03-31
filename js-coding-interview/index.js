function decimalToBinary(val) {
  if (val <= 1) {
    return String(val);
  } else {
    return decimalToBinary(Math.floor(val / 2)) + decimalToBinary(val % 2);
  }
}

console.log(decimalToBinary(11));
