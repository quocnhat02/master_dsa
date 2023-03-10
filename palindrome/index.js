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

console.log(palindrome('avcs'));
console.log(palindrome('abba'));
console.log(palindrome2('avcs'));
