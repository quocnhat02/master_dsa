function decimalToBinary(val) {
  if (val <= 1) {
    return String(val);
  }
  return decimalToBinary(Math.floor(val / 2)) + decimalToBinary(val % 2);
}

function binaryToDecimal(val) {
  let decimal = 0,
    idx = 0;
  while (val !== 0) {
    decimal += (val % 10) * Math.pow(2, idx);
    val = Math.floor(val / 10);
    idx++;
  }

  return decimal;
}

function gcd(num1, num2) {
  if (num1 === num2) {
    return num1;
  } else if (num1 > num2) return gcd(num1 - num2, num2);
  else if (num1 < num2) return gcd(num1, num2 - num1);
}

function checkPalindrome(val) {
  if (val.length <= 1) return true;
  else if (val[0] == val[val.length - 1]) {
    return checkPalindrome(val.substring(1, val.length - 1));
  }
  return false;
}

function isBalanced(val, idx = 0, cur_idx = 0) {
  if (idx == val.length) return cur_idx == 0;
  if (cur_idx < 0) return false;
  if (val[idx] == '(') return isBalanced(val, idx + 1, cur_idx + 1);
  else if (val[idx] == ')') return isBalanced(val, idx + 1, cur_idx - 1);
  else return false;
}

// console.log(decimalToBinary(10));
// console.log(binaryToDecimal(1010));

// console.log(gcd(6, 9));
// console.log(checkPalindrome('madams'));
console.log(isBalanced(['(', ')', '(', ')']));
