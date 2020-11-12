const assert = require('assert');

const myList = [1, 2, 3];

// func to swap first and third elements
const swap = ([a, b, c]) => [c, b, a];

console.log(swap(myList));

const swappedList = swap(myList);

assert.equal(swappedList[0], 3);
assert.equal(swappedList[1], 2);
assert.equal(swappedList[2], 1);
