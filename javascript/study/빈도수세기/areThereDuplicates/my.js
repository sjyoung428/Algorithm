const areThereDuplicates = (...args) => {
  const lookup = {};

  for (let item of args) {
    if (lookup[item]) return true;
    lookup[item] = 1;
  }
  return false;
};

console.log(areThereDuplicates(1, 2, 3)); //false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
