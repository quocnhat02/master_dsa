function printPattern1(n) {
  for (let i = 0; i < n; i++) {
    console.log('*'.repeat(n - i));
  }
}

function printPattern2(n) {
  for (let i = 0; i < n; i++) {
    console.log('*'.repeat(n));
  }
}

function reverseNumber(n) {
  let reverse = 0;
  let num = n;
  while (num > 0) {
    const last = num % 10;
    reverse = reverse * 10 + last;
    num = Number.parseInt(num / 10);
  }

  console.log(reverse);
}

function printPattern3(n) {
  for (let i = 0; i < n; i++) {
    console.log('*'.repeat(i + 1));
  }
}

function printPattern4(n) {
  for (let i = 0; i < n; i++) {
    console.log('*'.repeat(n - i));
  }
}

// printPattern1(4);
// printPattern2(4);
// reverseNumber(10899);
// printPattern3(4);
printPattern4(4);
