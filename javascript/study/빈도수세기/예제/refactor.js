const same = (a, b) => {
  if (a.length !== b.length) return false;

  let frequencyCounterA = {};
  let frequencyCounterB = {};
  for (let item of a) {
    frequencyCounterA[item] = (frequencyCounterA[item] || 0) + 1;
  }
  for (let item of b) {
    frequencyCounterB[item] = (frequencyCounterB[item] || 0) + 1;
  }

  for (let key in frequencyCounterA) {
    if (!(key ** 2 in frequencyCounterB)) return false;
    if (frequencyCounterA[key] !== frequencyCounterB[key ** 2]) return false;
  }
  return true;
};

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));
console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));

// O(n)
