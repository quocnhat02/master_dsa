function smallest_sub_array_of_size_k(arr, s) {
  let smallest = arr.length,
    startWindow = 0,
    currentSum = 0;

  for (let endWindow = 0; endWindow < arr.length; endWindow++) {
    currentSum += arr[endWindow];

    while (currentSum >= s && endWindow >= startWindow) {
      smallest = Math.min(smallest, endWindow - startWindow + 1);
      currentSum -= arr[startWindow];
      startWindow++;
    }
  }

  return smallest;
}

console.log(smallest_sub_array_of_size_k([2, 1, 5, 2, 3, 2], 7));
console.log(smallest_sub_array_of_size_k([2, 1, 5, 2, 8], 8));
console.log(smallest_sub_array_of_size_k([3, 4, 1, 1, 6], 8));
