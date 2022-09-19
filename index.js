function ternarySearch(arr, target, l, r) {
  if (r >= l) {
    let mid1 = l + Math.floor((r - l) / 3);
    let mid2 = r - Math.floor((r - l) / 3);
    if (arr[mid1] === target) {
      return mid1;
    }
    if (arr[mid2] === target) {
      return mid2;
    }

    if (target < arr[mid1]) {
      return ternarySearch(arr, target, l, mid1 - 1);
    } else if (target > arr[mid2]) {
      return ternarySearch(arr, target, mid2 + 1, r);
    } else {
      return ternarySearch(arr, target, mid1 + 1, mid2 - 1);
    }
  }
  return -1;
}

function ternarySearch2(
  arr,
  target,
  l = 0,
  r = arr.length - 1,
  mid1 = l + Math.floor((r - l) / 3),
  mid2 = r - Math.floor((r - l) / 3)
) {
  const start = performance.now();
  while (r >= l) {
    mid1 = l + Math.floor((r - l) / 3);
    mid2 = r - Math.floor((r - l) / 3);

    if (arr[mid1] === target) {
      console.log(performance.now() - start);
      return mid1;
    }
    if (arr[mid2] === target) {
      console.log(performance.now() - start);
      return mid2;
    }
    if (target < arr[mid1]) {
      r = mid1 - 1;
    } else if (target > arr[mid2]) {
      l = mid2 + 1;
    } else {
      l = mid1 + 1;
      r = mid2 - 1;
    }
  }
  console.log(performance.now() - start);
  return -1;
}

const mang = [];
for (let index = 1; index <= 10; index++) {
  mang.push(index);
}

console.log(ternarySearch2(mang, 4509));
