// Best time to buy and sell a stock

function maxProfit(arr) {
  const length = arr.length;
  let max = 0;
  let end = arr[length - 1];

  for (let i = length - 2; i >= 0; i--) {
    const price = end - arr[i];
    if (price <= 0) {
      end = arr[i];
    } else {
      max = Math.max(max, price);
    }
  }

  return max;
}

function maxProfit2(arr) {
  const length = arr.length;
  let max = 0;
  let first = arr[0];

  for (let end = 1; end < length; end++) {
    const price = arr[end] - first;
    if (price <= 0) {
      first = arr[end];
    } else {
      max = Math.max(max, price);
    }
  }

  return max;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));

console.log(maxProfit2([7, 1, 5, 3, 6, 4]));
console.log(maxProfit2([7, 6, 4, 3, 1]));
