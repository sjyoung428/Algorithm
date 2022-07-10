const same = (a, b) => {
  if (a.length !== b.length) return false;
  const len = a.length;

  let count = 0;

  for (let i = 0; i <= a.length; i++) {
    for (let j = 0; j <= b.length; j++) {
      if (a[i] ** 2 === b[j]) {
        count += 1;
        b.splice(j, 1);
        break;
      }
    }
  }
  if (count === len) return true;

  return false;
};

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));
console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));

// O(n^2)
