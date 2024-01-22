// Challenge 3: Find Two Numbers that Add up to "value"
function find_two_sum(numbers, target) {
  const length = numbers.length;
  const exist_number = new Set();

  for (let idx = 0; idx < length; idx++) {
    const elm = numbers[idx];
    if (exist_number.has(target - elm)) {
      return [target - elm, elm];
    }
    exist_number.add(elm);
  }

  return false;
}

console.log(find_two_sum([1, 21, 3, 14, 5, 60, 7, 6], 81));
