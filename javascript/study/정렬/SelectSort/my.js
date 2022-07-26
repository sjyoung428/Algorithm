const selectSort = (array) => {
  if (array.length <= 1) return array;
  let storeLowestIndex = 0;
  for (let i = 0; i < array.length; i++) {
    storeLowestIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[storeLowestIndex] > array[j]) {
        storeLowestIndex = j; // 가장 작은 값의 인덱스 저장
      }
    }
    if (storeLowestIndex !== i) {
      [array[i], array[storeLowestIndex]] = [array[storeLowestIndex], array[i]];
    }
  }
  return array;
};

console.log(selectSort([3, 1, 56, 7, 8, 10, -1]));
