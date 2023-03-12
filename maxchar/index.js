const maxChar = (str) => {
  let obj = {};
  for (let char of str) {
    obj[char] = obj[char] + 1 || 1;
  }

  let max = 0,
    character = '';

  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      character = key;
    }
  }

  return character;
};

console.log(maxChar('abbbbc'));
