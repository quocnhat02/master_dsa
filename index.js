const nemo = ['nemo'];
const everyone = new Array(100).fill('nemoTest');
everyone.push('nemo');

function findNemo(array) {
  let t0 = performance.now();
  let t1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      t1 = performance.now() - t0;
      console.log('Found Nemo!');
    }
  }
  console.log('Call to find Nemo took ' + t1 + 'ms');
}

findNemo(nemo);
findNemo(everyone);
