function printStarPattern(n) {
  let star = '*';
  let result = '';

  for (let i = 0; i < n + 1; i++) {
    result = '';
    for (let j = 0; j < i; j++) {
      result += star;
    }

    console.log(result);
  }
}

printStarPattern(4);
