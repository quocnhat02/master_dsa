function reverse(str) {
  if (str.length <= 1) {
    return str;
  }

  let reversed = [];
  let i = 0,
    j = str.length - 1;

  while (i <= j) {
    reversed[i] = str.charAt(j);
    reversed[j] = str.charAt(i);
    i++;
    j--;
  }

  return reversed.join('');
}

console.log(reverse('hello'));
