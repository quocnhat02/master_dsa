function calcLengthLastWord1(str) {
  const arr = str.trim().split(' ');
  return arr[arr.length - 1].length;
}

function calcLengthLastWord2(str) {
  if (str.length < 1 || str.trim().length === 0) {
    return 0;
  }

  let count = 0,
    i = str.length - 1;

  while (i > 0) {
    if (str[i] === ' ' && count > 0) {
      return count;
    } else if (str[i] !== ' ') {
      count++;
    }
    i--;
  }

  return count;
}

const str = ' Hello World   ';

console.log(calcLengthLastWord1(str));
console.log(calcLengthLastWord2(str));
