function isAnagram(s, t) {
  const countChar = {};
  for (let idx = 0; idx < s.length; idx++) {
    countChar[s[idx]] = (s[idx], (countChar[s[idx]] || 0) + 1);
  }

  for (const elm of t) {
    if (!countChar[elm]) return false;
    countChar[elm]--;
  }

  return true;
}

console.log(isAnagram('anagram', 'nagaram')); // Output: true
console.log(isAnagram('rat', 'car')); // Output: false
