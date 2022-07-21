// const factorial = (num) => {
//   let result = 1;
//   for (let i = 2; i <= num; i++) {
//     result *= i;
//   }
//   return result;
// };

const factorial = (num) => {
  if (num === 1) return num;
  return num * factorial(num - 1);
};

console.log(factorial(6));
