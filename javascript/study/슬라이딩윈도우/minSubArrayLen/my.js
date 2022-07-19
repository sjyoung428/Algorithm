const minSubArrayLen = (array, num) => {
  let sum = 0;
  let left = 0;
  let right = 0;
  let minLen = Infinity;

  while (left < array.length) {
    if (sum < num && right < array.length) {
      sum += array[right];
      right++;
    } else if (sum >= num) {
      minLen = Math.min(minLen, right - left);
      sum -= array[left];
      left++;
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
};

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
