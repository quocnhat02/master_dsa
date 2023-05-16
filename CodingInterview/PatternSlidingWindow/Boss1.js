// Permutation in a String (hard) #

function find_permutation(str, pattern) {
  let mapS = {};
  let mapP = {};
  let start = 0;

  for (let i = 0; i < pattern.length; i++) {
    if (!mapP[pattern[i]]) {
      mapP[pattern[i]] = 1;
    } else {
      mapP[pattern[i]]++;
    }
  }

  for (let end = 0; end < str.length; end++) {
    if (!mapS[str[end]]) {
      mapS[str[end]] = 1;
    } else {
      mapS[str[end]]++;
    }

    if (!mapP[str[end]]) {
    }
  }

  return false;
}

console.log(find_permutation('oidbcaf', 'abc'));
console.log(find_permutation('odicf', 'dc'));
console.log(find_permutation('bcdxabcdy', 'bcdyabcdx'));
console.log(find_permutation('aaacb', 'abc'));
