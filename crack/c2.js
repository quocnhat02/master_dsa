function reverseStr1(str) {
  if (str.length < 2 || str.trim().length === 0) {
    return str;
  }
  let reverse = '';
  let i = str.length - 1;
  while (i >= 0) {
    reverse += str[i--];
  }

  return reverse;
}

function reverseStr2(str) {
  if (str.length < 2 || str.trim().length === 0) {
    return str;
  }

  let arr = str.split('');
  let i = 0,
    j = str.length - 1;

  while (i <= j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }

  return arr.join('');
}

const str = 'hello';

console.log(reverseStr1(str));
console.log(reverseStr2(str));
