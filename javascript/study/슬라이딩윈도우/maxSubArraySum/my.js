const maxSubArraySum = (array, num) => {
  if (array.length < num) return null;

  let maxSum = 0;
  let compareNum = 0;
  for (let i = 0; i < num; i++) {
    compareNum += array[i];
  }
  maxSum = compareNum;
  for (let i = num; i < array.length; i++) {
    compareNum = compareNum - array[i - num] + array[i];
    if (maxSum < compareNum) {
      maxSum = compareNum;
    }
  }
  return maxSum;
};

console.log(maxSubArraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubArraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubArraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubArraySum([2, 3], 3)); // null
