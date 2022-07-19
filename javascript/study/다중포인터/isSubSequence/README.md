```js
isSubSequence("hello", "hello world"); // true
isSubSequence("sing", "sting"); // true
isSubSequence("abc", "abracadabra"); // true
isSubSequence("abc", "acb"); // false
```

첫 번째 string안의 문자의 순서가 두 번째 string안에서도 나타나는지 검사해라

Time: O(N+M)
Space: O(1)
