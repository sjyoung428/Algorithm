const linearSearch = (array, value) => {
  let result = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      result = i;
      break;
    } else {
      result = -1;
    }
  }
  return result;
};

console.log(linearSearch([1, 2, 3], 3));
