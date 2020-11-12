const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// test func myFizzBuzz return when a number divisible by 3 and 5 is passed as arg
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');

// test func myFizzBuzz return when a number divisible by 3 is passed as arg
assert.strictEqual(myFizzBuzz(3), 'fizz');

// test func myFizzBuzz return when a number divisible by 5 is passed
assert.strictEqual(myFizzBuzz(5), 'buzz');

// test func myFizzBuzz return when a number not divisible by 3 or 5 is passed
assert.strictEqual(myFizzBuzz(13), 13);

// test func myFizzBuzz return when an arg that is not a number is passed
assert.strictEqual(myFizzBuzz('13'), false); // OR
assert.ok(typeof myFizzBuzz('13') === 'boolean');
