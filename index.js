// T:O(n^2) S:O(1)
function isUnique(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) != i) {
      return false;
    }
  }
  return true;
}

// T:O(n*log(n)) S:O(n)
function isBOUnique(str) {
  let chars = str.split('').sort();

  for (let i = 1; i < chars.length; i++) {
    if (chars[i] === chars[i - 1]) {
      return false;
    }
  }
  return true;
}

// T:O(n) S:O(n)
function isOUnique(str) {
  let chars = {};

  for (let i = 0; i < str.length; i++) {
    const thisChar = str[i];

    if (chars[thisChar]) {
      return false;
    }

    chars[thisChar] = true;
  }
  return true;
}

// T:O(n) S:O(n)
function isSetUnique(str) {
  let chars = new Set();

  for (let i = 0; i < str.length; i++) {
    const thisChar = str[i];

    if (chars.has(thisChar)) {
      return false;
    }

    chars.add(thisChar);
  }
  return true;
}

// T:O(n) S:O(n)
function isSSetUnique(str) {
  return new Set(str).size === str.length;
}

// console.log(isUnique('abc'));
// console.log(isUnique('abca'));

// console.log(isOUnique('abc'));
// console.log(isOUnique('abca'));

// console.log(isBOUnique('abc'));
// console.log(isBOUnique('abca'));

console.log(isSetUnique('abc'));
console.log(isSetUnique('abca'));

console.log(isSSetUnique('abc'));
console.log(isSSetUnique('abca'));
