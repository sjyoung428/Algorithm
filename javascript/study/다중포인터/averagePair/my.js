const averagePair = (array, target) => {
  if (array.length < 2) return false;
  const newTarget = target * 2;
  let left = 0;
  let right = array.length - 1;
  while (right > left) {
    let validate = array[left] + array[right] - newTarget;
    if (validate === 0) return true;
    if (validate > 0) {
      right--;
    }
    if (validate < 0) {
      left++;
    }
  }
  return false;
};

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); //true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
