const reverseInt = (num) =>
  Number.parseInt(num.toString().split('').reverse().join(''));

console.log(reverseInt(123));
