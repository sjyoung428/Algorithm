const sumZero = (data) => {
  const len = data.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (data[i] + data[j] === 0) return [data[i], data[j]];
    }
  }
  return undefined;
};

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5])); // [-2,2]
