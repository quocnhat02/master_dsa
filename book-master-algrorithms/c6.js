function removeDuplicates(array) {
  const elementExist = new Set(array);
  const newArray = [];
  for (const element of elementExist) {
    newArray.push(element);
  }
  return newArray;
}

console.log(removeDuplicates([2, 5, 2, 1, 5, 1]));
