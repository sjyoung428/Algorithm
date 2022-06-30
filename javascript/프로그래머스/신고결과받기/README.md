## 두 개의 배열 교집합 구하기

`includes()` 함수는 배열이 특정값을 포함하고 있는지 확인하고 boolean값을 리턴한다.

```js
arr1 = [1, 2, 3];
arr2 = [2, 3, 4];

const 교집합 = arr1.filter((data) => arr2.includes(data)); // [2,3]
```
