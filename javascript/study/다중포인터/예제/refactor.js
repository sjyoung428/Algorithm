const sumZero = (data) => {
  let left = 0;
  let right = data.length - 1;

  while (left < right) {
    let sum = data[left] + data[right];

    if (sum === 0) return [data[left], data[right]];
    if (sum > 0) {
      right--;
    }
    if (sum < 0) {
      left++;
    }
  }
};

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5])); // [-2,2]
