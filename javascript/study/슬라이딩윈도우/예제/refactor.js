const maxSubArraySum = (array, num) => {
  if (array.length < num) return null;

  let currentSum = 0;
  let result = 0;

  for (let i = 0; i < num; i++) {
    currentSum += array[i];
  }

  result = currentSum;
  for (let i = num; i < array.length; i++) {
    currentSum = currentSum - array[i - num] + array[i];
    result = Math.max(result, currentSum);
  }

  return result;
};

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubArraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubArraySum([], 4)); // null
