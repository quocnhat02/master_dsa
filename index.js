function countNumberOfChar(str, key, k) {
  const countChar = new Map();
  const length = str.length;
  let startWindow = 0;
  let count = 0;

  for (let endWindow = 0; endWindow < length; endWindow++) {
    countChar.set(str[endWindow], (countChar.get(str[endWindow]) | 0) + 1);

    if (endWindow - startWindow >= k - 1) {
      if (countChar.has(key)) {
        count++;
      }

      countChar.set(str[startWindow], countChar.get(str[startWindow]) - 1);
      startWindow++;

      if (countChar.get(key) === 0) {
        countChar.delete(key);
      }
    }
  }

  return count;
}

console.log(countNumberOfChar('ababc', 'b', 3));
