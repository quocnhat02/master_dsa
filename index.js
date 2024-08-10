function findFirstCharWithMoreOnce(str) {
  let charSet = new Set();

  for (let idx = 0; idx < str.length; idx++) {
    if (charSet.has(str[idx])) {
      return str[idx];
    }
    charSet.add(str[idx]);
  }

  return '';
}

function findFirstCharWithMoreOnce2(str) {
  for (let idx = 0; idx < str.length - 1; idx++) {
    if (str[idx].indexOf(str.substring(idx + 1))) {
      return str[idx];
    }
  }

  return '';
}

console.log(findFirstCharWithMoreOnce('abcab'));
console.log(findFirstCharWithMoreOnce2('abcab'));
