// Best Time to Buy And Sell A Stock
function buyAndSellStock(arr) {
  const length = arr.length;
  let end = length - 1,
    start = length - 2;
  let maxOfStock = 0;

  while (start >= 0) {
    if (arr[start] > arr[end]) {
      end = start;
    } else if (arr[end] - arr[start] > maxOfStock) {
      maxOfStock = arr[end] - arr[start];
    }

    start--;
  }

  return maxOfStock;
}

console.log(buyAndSellStock([7, 2, 9, 1, 5, 4]));
console.log(buyAndSellStock([7, 1, 5, 3, 6, 4]));
console.log(buyAndSellStock([7, 6, 5, 4, 3]));
