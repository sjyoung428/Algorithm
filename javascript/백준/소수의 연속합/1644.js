let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n")[0];

const eratos = (num) => {
  const isPrime = new Array(num + 1).fill(true).fill(false, 0, 2);

  for (let i = 2; i * i <= num; i++) {
    if (isPrime[i] === false) continue;

    for (let j = i * i; j <= num; j += i) {
      isPrime[j] = false;
    }
  }

  return isPrime;
};

const countResult = (prime, num) => {
  let left = 0;
  let right = 1;
  let sum = prime[left];
  let count = 0;

  while (left < prime.length && right < prime.length) {
    if (sum <= num) {
      if (sum === num) count++;
      sum += prime[right++];
    }

    if (sum > num) {
      sum -= prime[left++];
    }
  }

  if (prime[prime.length - 1] === num) {
    count++;
  }
  return count;
};

const solve = (input) => {
  const num = Number(input);
  const prime = [];
  let count = 0;

  eratos(num).forEach((bool, num) => {
    if (bool == true) {
      prime.push(num);
    }
  });
  count = countResult(prime, num);

  return count;
};

console.log(solve(input));
