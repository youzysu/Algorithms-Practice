const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const first = input[0];
const second = input[1];
const third = input[2];

const colors = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

let answer = colors[first] + '' + colors[second];
answer = answer * 10 ** colors[third];

console.log(answer);