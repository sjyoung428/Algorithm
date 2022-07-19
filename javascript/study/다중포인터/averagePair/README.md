```js
averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); //true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false
```

배열안의 숫자들은 정렬된 상태이다.

배열안 두개의 숫자의 평균이 두 번째 prop의 값과 같다면 true 다르면 false를 반환한다

Time: O(N)
Space: O(1)
