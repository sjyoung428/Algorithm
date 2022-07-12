const countUniqueValue = (data) => {
  // const len = data.length;
  // if (len <= 1) return len;

  // let count = 0;
  // let countPoint = 0;
  // let duplicatePoint = countPoint + 1;

  // while (countPoint < len) {
  //   if (data[countPoint] === data[duplicatePoint]) {
  //     duplicatePoint++;
  //   } else {
  //     countPoint = duplicatePoint;
  //     count++;
  //   }
  // }

  // return count;

  const setData = new Set(data);
  const arrData = [...setData];
  return arrData.length;
};

console.log(countUniqueValue([1, 1, 1, 1, 2])); // 2
console.log(countUniqueValue([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValue([])); // 0
console.log(countUniqueValue([-2, -1, -1, 0, 1])); // 4
