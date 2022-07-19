const isSubSequence = (string1, string2) => {
  // if (string1.length > string2.length) return false;
  // if (!string1) return true;

  // let left = 0;
  // let right = 0;

  // while (right < string2.length) {
  //   if (string1[left] === string2[right]) {
  //     left++;
  //   }
  //   if (left === string1.length) return true;
  //   right++;
  // }
  // return false;

  if (string1.length === 0) return true;
  if (string2.length === 0) return false;

  if (string1[0] === string2[0])
    return isSubSequence(string1.slice(1), string2.slice(1));
  return isSubSequence(string1, string2.slice(1));
};

console.log(isSubSequence("hello", "hello world")); // true
console.log(isSubSequence("sing", "sting")); // true
console.log(isSubSequence("abc", "abracadabra")); // true
console.log(isSubSequence("abc", "acb")); // false
