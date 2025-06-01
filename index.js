function isStrobogrammatic(number) {
  const map = {
    0: '0',
    1: '1',
    6: '9',
    8: '8',
    9: '6',
  };

  let left = 0,
    right = number.length - 1;
  while (left < right) {
    const l = number[left];
    const r = number[right];
    if (!(l in map) || map[l] !== r) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(isStrobogrammatic('69')); // true  → 69 → xoay thành 96 → đúng
console.log(isStrobogrammatic('88')); // true  → xoay vẫn là 88
console.log(isStrobogrammatic('962')); // false → 9→6, 6→9, nhưng 2 không hợp lệ
console.log(isStrobogrammatic('1')); // true
console.log(isStrobogrammatic('2')); // false
