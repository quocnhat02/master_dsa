function decimalToBinary(testVariable) {
  if (testVariable <= 1) {
    return String(testVariable);
  } else {
    return (
      decimalToBinary(Math.floor(testVariable / 2)) +
      decimalToBinary(testVariable % 2)
    );
  }
}

console.log(decimalToBinary(11));
