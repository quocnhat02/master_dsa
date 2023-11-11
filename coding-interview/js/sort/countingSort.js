// counting sort
function countingSort(arr) {
  const max = arr.reduce((res, cur) => Math.max(res, cur), 0);

  const count = new Array(max + 1).fill(0);
  for (const num of arr) {
    count[num]++;
  }
  for (let i = 1; i < count.length; i++) {
    count[i] = count[i - 1] + count[i];
  }
  const result = new Array(arr.length);
  for (const num of arr) {
    const position = count[num] - 1;
    result[position] = num;
    count[num]--;
  }

  return result;
}

const arr = [4, 2, 6, 4, 8, 7, 5, 7, 1, 3];

console.log(countingSort(arr));
