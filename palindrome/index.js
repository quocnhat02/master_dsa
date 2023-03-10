const palindrome = (str) => {
  let length = str.length;
  for (let i = 0; i < length / 2; i++) {
    if (str[i] !== str[length - 1 - i]) {
      return false;
    }
  }
  return true;
};

const palindrome2 = (str) => str.split('').reverse().join('') === str;

const palindrome3 = (str) =>
  str.split('').every((char, i) => char === str[str.length - 1 - i]);

console.log(palindrome('avcs'));
console.log(palindrome('abxvba'));
console.log(palindrome2('abba'));
console.log(palindrome3('ababa'));
