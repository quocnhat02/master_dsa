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

function printPattern5(n) {
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j <= i; j++) {
      str += j + 1;
    }
    console.log(str);
  }
}

function printPattern6(n) {
  let char = 'A';
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j <= i; j++) {
      str += char;
      char = String.fromCharCode(char.charCodeAt(0) + 1);
    }
    console.log(str);
  }
}

function findDeFromBi(n) {
  let bi = 0;
  let de = n;

  for (let i = 0; i < `${n}`.length; i++) {
    bi = bi + Math.pow(2, i) * (de % 10);
    de = Number.parseInt(de / 10);
  }

  console.log(bi);
}

function findBiFromDe(n) {
  let bi = n;
  let de = 0;

  for (let i = 0; i < `${n}`.length; i++) {}

  console.log(bi);
}

// printPattern1(4);
// printPattern2(4);
// reverseNumber(10899);
// printPattern3(4);
// printPattern4(4);
// printPattern5(4);
// printPattern6(4);
findDeFromBi(101);
