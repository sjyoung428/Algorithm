const maxSubArraySum = (array, num) => {
  if (array.length < num) return null;

  let maxSum = -Infinity; // 배열이 음수들의 집합일 경우 생각
  for (let i = 0; i <= array.length - num; i++) {
    const copyArray = [...array];
    let sliceArray = copyArray.splice(i, num);
    let sum = sliceArray.reduce((prev, curr) => prev + curr);
    if (maxSum < sum) {
      maxSum = sum;
    }
  }

  return maxSum;
};

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubArraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubArraySum([], 4)); // null
