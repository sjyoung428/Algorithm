const naiveSearch = (long, short) => {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    if (long[i] === short[0]) {
      let validate = long.slice(i, short.length + i);
      if (validate === short) {
        count++;
      }
    }
  }
  return count;
};

console.log(naiveSearch("cat dog cat cow ", "cat"));
console.log(naiveSearch("cat dog cat cow ", "abc"));
