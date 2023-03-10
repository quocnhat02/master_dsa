const reverseInt = (num) =>
  Math.sign(num) === -1
    ? Number.parseInt('-' + num.toString().split('').reverse().join(''))
    : Number.parseInt(num.toString().split('').reverse().join(''));

console.log(reverseInt(-500));
