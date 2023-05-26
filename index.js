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

function printCharacterPattern(n) {
  let start = 65;
  let line = '';

  for (let i = 0; i < n; i++) {
    line = '';
    for (let j = 0; j < i + 1; j++) {
      line += String.fromCharCode(start);
      start++;
    }
    console.log(line);
  }
}

function printRectanglePattern(r, c) {
  let star = ' * ';
  let line = '';

  for (let i = 0; i < r; i++) {
    line = '';
    for (let j = 0; j < c; j++) {
      if (i === 0 || i === r - 1) {
        line += star;
      } else {
        if (j === 0 || j === c - 1) {
          line += star;
        } else {
          line += '   ';
        }
      }
    }
    console.log(line);
  }
}

function printInvertedAndRotatedHalfPyramidPattern(n) {
  let star = ' * ';
  let line = '';

  for (let i = 0; i < n; i++) {
    line = '';
    for (let j = 0; j < n; j++) {
      if (j >= n - 1 - i) {
        line += star;
      } else {
        line += '   ';
      }
    }
    console.log(line);
  }
}

function printInvertedHalfPyramidWithNumbersPattern(n) {
  let line = '';

  for (let i = 0; i < n; i++) {
    line = '';
    for (let j = 0; j < n - i; j++) {
      line += j + 1;
    }

    console.log(line);
  }
}

function floydTrianglePattern(n) {
  let line = '';
  let start = '1';

  for (let i = 0; i < n; i++) {
    line = '';
    for (let j = 0; j < i + 1; j++) {
      if (start > 10) {
        line += ' ' + start;
      } else {
        line += ' ' + start + ' ';
      }
      start++;
    }
    console.log(line);
  }
}

// printStarPattern(4);
// printInvertedStartPattern(4);
// printHalfPyramidPattern(4);
// printCharacterPattern(4);
// printRectanglePattern(4, 6);
// printInvertedAndRotatedHalfPyramidPattern(4);
// printInvertedHalfPyramidWithNumbersPattern(5);
floydTrianglePattern(5);
