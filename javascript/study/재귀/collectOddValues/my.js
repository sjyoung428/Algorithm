const collectOddValues = (data) => {
  let result = [];

  if (data.length === 0) return result;

  if (data[0] % 2 === 1) {
    result.push(data[0]);
  }

  const recursionData = collectOddValues(data.slice(1));

  result = result.concat(recursionData);
  return result;
};

console.log(collectOddValues([1, 2, 3, 4, 5]));
