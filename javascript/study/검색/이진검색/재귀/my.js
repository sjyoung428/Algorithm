const binarySearch = (array, value) => {
  let left = 0;
  let right = array.length - 1;

  const recursive = (start, end) => {
    let middle = Math.floor((start + end) / 2);

    if (array[middle] === value) return middle;

    if (start > end) return -1;

    if (array[middle] < value) {
      return recursive(middle + 1, end);
    } else if (array[middle] > value) {
      return recursive(start, middle - 1);
    }
  };
  return recursive(left, right);
};

console.log(binarySearch([1, 2, 4, 5, 7, 8, 9], 5));
console.log(binarySearch([1, 2, 4, 5, 7, 8, 9], 3));
