const productOfArray = (data) => {
  if (data.length === 1) return data[0];
  return data[0] * productOfArray(data.slice(1));
};

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
