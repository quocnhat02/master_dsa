// Challenge 5: Find Minimum Value in Array

// Sample Input #
// arr = [9,2,3,6]
// Sample Output #
// 2

// O(nlogn)
function findMinimum(arr) {
  return arr.sort((a, b) => a - b)[0];
}

let arr = [9, 2, 3, 6];

console.log(findMinimum(arr));
