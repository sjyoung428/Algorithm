const binarySearch = (array, value) => {
  let left = 0;
  let right = array.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (left <= right && array[middle] !== value) {
    if (array[middle] < value) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  return array[middle] === value ? middle : -1;
};

console.log(binarySearch([1, 2, 4, 5, 7, 8, 9], 5));
console.log(binarySearch([1, 2, 4, 5, 7, 8, 9], 3));
