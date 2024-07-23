function gcd(value1, value2) {
  if (value1 === value2) return value1;
  else if (value1 > value2) return gcd(value1 - value2, value2);
  else return gcd(value1, value2 - value1);
}

console.log(gcd(42, 56));
