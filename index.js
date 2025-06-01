function getNext(n) {
  let sum = 0;

  while (n > 0) {
    let d = n % 10;
    sum += d * d;
    n = Math.floor(n / 10);
  }

  return sum;
}

function isHappy(n) {
  let slow = n;
  let fast = getNext(n);

  while (fast !== 1 && slow !== fast) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  }

  return fast === 1;
}

console.log(isHappy(19));
console.log(isHappy(20));
