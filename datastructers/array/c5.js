// Challenge 5: Find Minimum Value in Array
function find_min_val(numbers) {
  return numbers.reduce((prev, cur) => Math.min(prev, cur), numbers[0]);
}

console.log(find_min_val([9, 2, 3, 6]));
