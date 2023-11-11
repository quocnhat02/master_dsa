// Maximum product subarray
function findMaxProduct(numbers) {
  let ans = 0;
  if (numbers.length == 1) {
    return numbers[0];
  }
  let currentProduct = 1;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] != 0) {
      currentProduct *= numbers[i];
      ans = Math.max(ans, currentProduct);
    } else {
      currentProduct = 1;
    }
  }

  currentProduct = 1;
  for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] != 0) {
      currentProduct *= numbers[i];
      ans = Math.max(ans, currentProduct);
    } else {
      currentProduct = 1;
    }
  }

  return ans;
}
