## 호출 스택

아래 코드 디버깅 하면서 호출 스택 이해하기

```js
const takeShower = () => {
  return "Showring";
};

const eatBreakfast = () => {
  let meal = cookFood();
  return `Eating ${meal}`;
};

const cookFood = () => {
  let items = ["Oatmeal", "Eggs", " Protein Shake"];
  return items[Math.floor(Math.random() * items.length)];
};

const wakeUp = () => {
  takeShower();
  eatBreakfast();
  console.log("Ok ready to go to work!");
};

wakeUp();
```

함수가 실행 되면 호출 스택 맨위에 쌓이게 되고 함수안의 return을 만나거나 더 이상 실행할 무언가가 없다면

스택 맨위에서 그 함수가 빠져나가게 되고 바로 아래에 있는 함수를 호출한다

<hr/>

## Base Case

종료 조건

```js
const sumRange = (num) => {
  if (num === 1) return 1; // Base Case
  return num + sumRange(num - 1);
};
```
