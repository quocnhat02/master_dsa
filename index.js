function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return factorial(n - 1) * n;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));
