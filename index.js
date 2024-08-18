function findBestToBuyAndSell(arr) {
  let start_buy = 0,
    best = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[start_buy]) {
      start_buy = i;
    }

    best = Math.max(best, arr[i] - arr[start_buy]);
  }

  return best;
}

console.log(findBestToBuyAndSell([7, 1, 5, 3, 6, 4]));
console.log(findBestToBuyAndSell([7, 6, 4, 3, 1]));
