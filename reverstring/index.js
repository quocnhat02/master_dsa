const reverse1 = (str) => str.split('').reverse().join('');
const reverse2 = (str) => {
  let reverse = '';
  let length = str.length;
  for (let i = 0; i < length; i++) {
    reverse += str[length - 1 - i];
  }
  return reverse;
};
const reverse3 = (str) =>
  str
    .split('')
    .reduce((rev, char, i, arr) => rev + arr[arr.length - 1 - i], '');

console.log(reverse1('abc'));
console.log(reverse2('abc'));
console.log(reverse3('abc'));
