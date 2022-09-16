function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n /= 2;
  }
  return true;
}

function numberPowerOfTwo(n) {
  if (n === 0) {
    return 1;
  }
  return numberPowerOfTwo(n - 1) * 2;
}
console.log(numberPowerOfTwo(3));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));
