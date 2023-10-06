// Single Number
function singleNumber1(numbers) {
  const countMap = new Map();
  let ans = 0;

  for (const number of numbers) {
    countMap.set(number, (countMap.get(number) || 0) + 1);
    ans = countMap.get(number) === 1 ? number : ans;
  }

  return ans;
}

function singleNumber2(numbers) {
  const numSet = new Set();
  let ans = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numSet.has(numbers[i])) {
      ans -= numbers[i];
    } else {
      numSet.add(numbers[i]);
      ans += numbers[i];
    }
  }

  return ans;
}

// XOR: a ^ a = 0; a ^ 0 = a; a ^ b = b ^ a
function singleNumber3(numbers) {
  return numbers.reduce((res, cur) => res ^ cur, 0);
}

console.log(singleNumber1([1, 2, 3, 4, 1, 2, 3]));
console.log(singleNumber2([1, 2, 3, 4, 1, 2, 3]));
console.log(singleNumber3([1, 2, 3, 4, 1, 2, 3]));
