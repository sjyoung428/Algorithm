const validAnagram = (stringA, stringB) => {
  if (stringA.length !== stringB.length) return false;
  const frequencyCounterA = {};
  const frequencyCounterB = {};
  const splitA = stringA.split("");
  const splitB = stringB.split("");

  for (let value of splitA) {
    frequencyCounterA[value] = (frequencyCounterA[value] || 0) + 1;
  }
  for (let value of splitB) {
    frequencyCounterB[value] = (frequencyCounterB[value] || 0) + 1;
  }

  // console.log(frequencyCounterA);
  // console.log(frequencyCounterB);

  for (let key in frequencyCounterA) {
    if (!(key in frequencyCounterB)) return false;
    if (frequencyCounterA[key] !== frequencyCounterB[key]) return false;
  }
  return true;
};

console.log(validAnagram(" ", " ")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
