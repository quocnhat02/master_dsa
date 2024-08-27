function maxArea(height) {
  let left = 0,
    right = height.length - 1,
    maxWater = 0;

  while (left < right) {
    let water = Math.min(height[left], height[right]) * (right - left);

    maxWater = Math.max(maxWater, water);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}

// Ví dụ sử dụng
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49
