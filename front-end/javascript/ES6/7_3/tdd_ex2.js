const assert = require('assert');

// func wordLengths to be tested

const wordLengths = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    newArr.push(arr[i].length);
  }
  return newArr;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);
