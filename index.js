function reverseString(s) {
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }

  return s;
}

console.log(reverseString(['a', 'b', 'c', 'd', 'e']));
