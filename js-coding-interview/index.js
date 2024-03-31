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

function gcd(num1, num2) {
  if (num1 === num2) {
    return num1;
  } else if (num1 > num2) return gcd(num1 - num2, num2);
  else if (num1 < num2) return gcd(num1, num2 - num1);
}

console.log(decimalToBinary(10));
console.log(binaryToDecimal(1010));

console.log(gcd(6, 9));
