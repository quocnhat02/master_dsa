function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

// function isPowerOfTwo(n) {
//   if (n < 1) {
//     return false;
//   }
//   while (n > 1) {
//     if (n % 2 !== 0) {
//       return false;
//     }
//     n /= 2;
//   }
//   return true;
// }

// function numberPowerOfTwo(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return numberPowerOfTwo(n - 1) * 2;
// }
// console.log(numberPowerOfTwo(3));
console.log(isPowerOfTwoBitWise(1));
console.log(isPowerOfTwoBitWise(2));
console.log(isPowerOfTwoBitWise(5));
