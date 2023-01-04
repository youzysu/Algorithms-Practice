const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const iteration = input[0];
const answer = [];

for (let test = 1; test <= iteration; test++) {
  const dataAmount = input[test].split(' ');
  const base = parseInt(dataAmount[0]);
  const above = parseInt(dataAmount[1]);

  let digit = 1;
  for (let count = 0; count < above; count++) {
    digit = (digit * base) % 10;
  }

  if (digit === 0) answer.push(10);
  else answer.push(digit);
}

console.log(answer.join('\n'));