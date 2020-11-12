const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// check if func sum returns 9 - func parameters 4, 5
assert.strictEqual(sum(4, 5), 9);

// check if func sum returns 0 - func parameters 0, 0
assert.strictEqual(sum(0, 0), 0);

// check if func sum returns a error msg when a string is passed as a arg
assert.throws(() => {
  sum(4, '5');
});

// check if func sum returns the right error msg when a string is passed as a arg
assert.throws(() => {
  sum(4, '5');
}, /parameters must be numbers/);
