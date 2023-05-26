function printStarPattern(n) {
  let star = '*';
  let line = '';

  for (let i = 0; i < n; i++) {
    line = '';
    for (let j = 0; j < i + 1; j++) {
      line += star;
    }

    console.log(line);
  }
}

function printInvertedStartPattern(n) {
  let star = '*';
  let line = '';

  for (let i = 0; i < n; i++) {
    line = '';
    for (let j = 0; j < n - i; j++) {
      line += star;
    }

    console.log(line);
  }
}

function printHalfPyramidPattern(n) {
  let line = '';

  for (let i = 0; i < n; i++) {
    line = '';

    for (let j = 0; j < i + 1; j++) {
      line += `${j + 1}`;
    }

    console.log(line);
  }
}

// printStarPattern(4);
// printInvertedStartPattern(4);
printHalfPyramidPattern(4);
