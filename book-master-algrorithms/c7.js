function isPalindrome(string) {
  let lower_string = string.toLowerCase();
  let left = 0,
    right = string.length - 1;

  while (left < right) {
    if (
      lower_string[left].toLowerCase() !== lower_string[right].toLowerCase()
    ) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome('Racecar'));
console.log(isPalindrome('hello'));
