const isPalindrome = (string) => {
  if (string.length % 2 !== 0) {
    string.slice((string.length - 1) / 2, (string.length - 1) / 2 + 1);
  }
  if (string[0] !== string[string.length - 1]) return false;
  if (string.length === 0) return true;
  isPalindrome(string.slice(1).slice(-1));
  return true;
};

console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false
