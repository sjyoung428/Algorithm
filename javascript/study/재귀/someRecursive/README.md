```js
// const isOdd = val => val % 2 !== 0;

someRecursive([1, 2, 3, 4], isOdd); // true
someRecursive([4, 6, 8, 9], isOdd); // true
someRecursive([4, 6, 8], isOdd); // false
someRecursive([4, 6, 8], (val) => val > 10); // false
```

callback 함수가 배열안의 하나의 값이라도 true를 return 하면 true를 return하고

아니면 false를 반환하는 someRecursive함수를 만들어라
