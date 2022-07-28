const merge = (leftArray, rightArray) => {
  const result = [];
  let leftPoint = 0;
  let rightPoint = 0;

  while (leftPoint < leftArray.length && rightPoint < rightArray.length) {
    if (leftArray[leftPoint] < rightArray[rightPoint]) {
      result.push(leftArray[leftPoint]);
      leftPoint++; // 왼쪽 array값이 더 작을 경우 result에 값을 push
    }
    if (leftArray[leftPoint] > rightArray[rightPoint]) {
      result.push(rightArray[rightPoint]);
      rightPoint++; // 오른쪽 array값이 더 작을 경우 result에 값을 push
    }
  }

  while (leftPoint < leftArray[leftPoint]) {
    result.push(leftArray[leftPoint]);
    leftPoint++; // array의 나머지 값을 result에 push
  }
  while (rightPoint < rightArray[rightPoint]) {
    result.push(rightArray[rightPoint]);
    rightPoint++; // array의 나머지 값을 result에 push
  }

  return result;
};

// console.log(merge([1, 10, 46, 50, 100], [2, 14, 99, 100, 101, 1000])); // 정렬되어 있는 두개의 배열

exports.merge = merge;
