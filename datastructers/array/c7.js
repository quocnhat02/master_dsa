// Challenge 7: Find Second Maximum Value in an Array
function find_second_max(numbers) {
  return numbers.reduce(
    (prev, cur) => {
      if (cur > prev[0]) {
        prev[0] = cur;
      }

      if (cur > prev[1] && cur !== prev[0]) {
        prev[1] = cur;
      }

      return prev;
    },
    [0, 0] // [first_max, second_max]
  )[1];
}

console.log(find_second_max([9, 2, 3, 6]));
