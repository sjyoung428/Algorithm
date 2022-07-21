const power = (base, exponent) => {
  if (base === 1 || exponent === 0) return 1; //Base Case

  return base * power(base, exponent - 1);
};

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16
