const findLongestSubstring = (string) => {
  if (!string) return 0;

  let left = 0;
  let lookup = {};
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (lookup[string[i]]) {
      left = Math.max(left, lookup[string[i]]);
    }
    count = Math.max(count, i - left + 1);
    lookup[string[i]] = i + 1;
  }
  return count;
};

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
