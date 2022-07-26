const InsersionSort = (array) => {
  if (array.length <= 1) return array;

  for (let i = 1; i < array.length; i++) {
    let currentValue = array[i];
    let j;
    for (j = i - 1; j >= 0 && array[j] > currentValue; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currentValue;
  }
  return array;
};

console.log(InsersionSort([3, 1, 56, 7, 8, 10, -1]));
