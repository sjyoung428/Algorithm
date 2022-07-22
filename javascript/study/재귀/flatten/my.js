const flatten = (array) => {
  return Infinity > 0
    ? array.reduce(
        (acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr),
        []
      )
    : array.slice();
};

// const flatten = (array) => {
//   return array.flat(Infinity);
// };

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
