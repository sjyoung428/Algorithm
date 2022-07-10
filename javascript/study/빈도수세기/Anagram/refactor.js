const validAnagram = (stringA, stringB) => {
  if (stringA.length !== stringB.length) return false;

  const lookup = {};
  for (let i = 0; i <= stringA.length; i++) {
    let letter = stringA[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i <= stringB.length; i++) {
    let letter = stringB[i];
    if (!lookup[letter]) return false;
    lookup[letter] -= 1;
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
