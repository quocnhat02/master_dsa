function reverseStr(str) {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'that is not good';
  }

  let arr = str.split('');
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr.join('');
}

let str = 'Hello my name is Nhat';

console.log(reverseStr(str));
