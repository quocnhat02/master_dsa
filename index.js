function isPrime(n) {
  if (n < 2) {
    return false;
  } else if (n === 2) {
    return true;
  } else if (n % 2 === 0) {
    return false;
  } else {
    let halfNumber = Math.sqrt(n);
    for (let i = 3; i < halfNumber; i += 2) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
}

console.log(isPrime(1));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(113));
