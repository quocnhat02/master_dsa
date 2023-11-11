// Best Time to Buy And Sell A Stock
function maxProfit(prices) {
  const length = prices.length;
  let max = 0;
  let i = 0,
    j = 1;

  while (j < length) {
    const greZero = prices[j] - prices[i];
    if (greZero >= 0) {
      max = Math.max(greZero, max);
    } else {
      i = j;
    }
    j++;
  }

  return max;
}

const prices1 = [7, 1, 5, 1, 15, 2, 17];
const prices2 = [7, 6, 4, 3, 1];

console.log(maxProfit(prices1));
console.log(maxProfit(prices2));
