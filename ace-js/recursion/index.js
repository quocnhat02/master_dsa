function printPascal(value) {
  if (value == 0) return [1];
  else {
    var line = [1];
    previousLine = printPascal(value - 1);

    for (let i = 0; i < previousLine.length - 1; i++) {
      line.push(previousLine[i] + previousLine[i + 1]);
    }

    line.push(1);
  }
  return line;
}

console.log(printPascal(5));
