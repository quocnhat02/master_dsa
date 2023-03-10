const reverseInt = (num) =>
  Math.sign(num) === -1
    ? Number.parseInt('-' + num.toString().split('').reverse().join(''))
    : Number.parseInt(num.toString().split('').reverse().join(''));

const reverseInt2 = (num) =>
  parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);

console.log(reverseInt2(-1230));
