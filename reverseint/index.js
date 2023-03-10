const reverseInt = (num) => {
  if (Math.sign(num) === -1) {
    return Number.parseInt('-' + num.toString().split('').reverse().join(''));
  } else {
    return Number.parseInt(num.toString().split('').reverse().join(''));
  }
};

console.log(reverseInt(-123));
