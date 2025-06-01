function intervalList(a, b) {
  const result = [];
  let i = 0,
    j = 0;

  while (i < a.length && j < b.length) {
    const [startA, endA] = a[i];
    const [startB, endB] = b[j];

    let start = Math.max(startA, startB);
    let end = Math.min(endA, endB);

    if (start <= end) result.push([start, end]);

    if (endA < endB) i++;
    else j++;
  }

  return result;
}

let A = [
    [0, 2],
    [5, 10],
    [13, 23],
    [24, 25],
  ],
  B = [
    [1, 5],
    [8, 12],
    [15, 24],
    [25, 26],
  ];

console.log(intervalList(A, B));
