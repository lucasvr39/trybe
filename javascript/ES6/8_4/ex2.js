const assert = require('assert');

// function that accepts a variable numbers of parameters to sum them
const sum = (...nums) => {
  let total = 0;
  for (let num of nums) {
    total += num;
  }
  return total;
};

assert.equal(sum(), 0);
assert.equal(sum(1), 1);
assert.equal(sum(1, 2), 3);
assert.equal(sum(1, 2, 3), 6);
assert.equal(sum(1, 2, 3, 4), 10);

// console.log(sum());
// console.log(sum(1));
// console.log(sum(1, 2));
// console.log(sum(1, 2, 3));
// console.log(sum(1, 2, 3, 4));
