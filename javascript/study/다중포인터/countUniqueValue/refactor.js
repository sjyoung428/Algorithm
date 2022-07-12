const countUniqueValue = (data) => {
  const len = data.length;
  if (len <= 1) return len;

  let i = 0;
  for (let j = 1; j < len; j++) {
    if (data[i] !== data[j]) {
      i++;
      data[i] = data[j];
    }
  }

  return i + 1;
};

console.log(countUniqueValue([1, 1, 1, 1, 2])); // 2
console.log(countUniqueValue([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValue([])); // 0
console.log(countUniqueValue([-2, -1, -1, 0, 1])); // 4
