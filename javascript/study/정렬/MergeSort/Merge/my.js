const merge = (leftArray, rightArray) => {
  const result = [];

  let leftPoint = 0;
  let rightPoint = 0;

  while (
    leftPoint !== leftArray.length - 1 &&
    rightPoint !== rightArray.length - 1
  ) {
    if (leftArray[leftPoint] < rightArray[rightPoint]) {
      result.push(leftArray[leftPoint]);
      leftPoint++;
    }
    if (leftArray[leftPoint] > rightArray[rightPoint]) {
      result.push(rightArray[rightPoint]);
      rightPoint++;
    }
    if (leftArray[leftPoint] === rightArray[rightPoint]) {
      result.push(leftArray[leftPoint], rightArray[rightPoint]);
      leftPoint++;
      rightPoint++;
    }
    if (leftPoint === leftArray.length) {
      for (let j = rightPoint; j < rightArray.length; j++) {
        result.push(rightArray[j]);
      }
      break;
    }

    if (rightPoint === rightArray.length) {
      for (let j = leftPoint; j < leftArray.length; j++) {
        result.push(leftPoint[j]);
      }
      break;
    }
  }
  return result;
};
// merge([1, 10, 50], [2, 14, 99, 100]);
console.log(merge([1, 10, 46, 50, 100], [2, 14, 99, 100, 101, 1000]));
