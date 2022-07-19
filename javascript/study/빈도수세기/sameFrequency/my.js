const sameFrequency = (num1, num2) => {
  let string1 = String(num1);
  let string2 = String(num2);

  if (string1.length !== string2.length) return false;

  const lookup = {};

  for (let i = 0; i < string1.length; i++) {
    let letter = string1[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  for (let i = 0; i < string2.length; i++) {
    let letter = string2[i];
    if (!lookup[letter]) return false;
    lookup[letter] -= 1;
  }

  return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
