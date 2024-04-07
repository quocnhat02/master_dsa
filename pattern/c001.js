function checkDNA(str, n) {
  const dna = {
    A: 1,
    C: 2,
    G: 3,
    T: 4,
  };

  const exists = new Map();
  let start = 0,
    end = 0;

  while (start <= end && end <= str.length - 1) {
    if (exists.has(str[start]) && exists.get(str[start]) > -1) {
    }
  }
}
