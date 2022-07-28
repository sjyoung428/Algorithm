const { merge } = require("./Merge/refactor");

const mergeSort = (array) => {
  if (array.length <= 1) return array;
  let mid = Math.floor(array.length / 2);

  let left = mergeSort(array.slice(0, mid)); // 왼쪽 오른쪽으로 절반씩 나누기
  let right = mergeSort(array.slice(mid)); // 왼쪽 오른쪽으로 절반씩 나누기

  const result = merge(left, right); // merge하기

  return result;
};

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9])); // [  1,  9, 10, 24, 72, 73, 76 ]
