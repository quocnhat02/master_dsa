function reverseString(s) {
  return s.trim().split(/\s+/).reverse().join(' ');
}

console.log(reverseString('  the sky  is  blue  '));
