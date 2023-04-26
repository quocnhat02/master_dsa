function reverse(str) {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'Error';
  }
  let reverseStr = '';
  let totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    reverseStr += str[i];
  }

  return reverseStr;
}

function reverse2(str) {
  return str.split('').reverse().join('');
}

const reverse3 = (str) => [...str].reverse().join('');

console.log(reverse('Hello'));
console.log(reverse2('Hello'));
console.log(reverse3('Hello'));
