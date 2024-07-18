function findSecondMax(array) {
  if (array.length < 2) {
    return null;
  }

  let max = 0,
    second_max = 0;

  for (let element of array) {
    max = Math.max(max, element);
    second_max = Math.max(second_max, element !== max ? element : second_max);
  }

  return second_max;
}

console.log(findSecondMax([9, 2, 3, 6]));
