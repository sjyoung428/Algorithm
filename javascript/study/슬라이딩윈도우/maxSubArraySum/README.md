```js
maxSubArraySum([100, 200, 300, 400], 2); // 700
maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
maxSubArraySum([-3, 4, 0, -2, 6, -1], 2); // 5
maxSubArraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
maxSubArraySum([2, 3], 3); // null
```

첫 번째 prop으로 받은 배열에서 두 번째 prop만큼의 길이를 가지는 SubArray들에 대해

element들의 합이 가장 큰 배열을 구하고 그 값을 구해라

Time: O(N)
Space: O(1)
