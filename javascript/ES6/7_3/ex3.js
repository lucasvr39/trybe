const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1); // remove permanently instead of create a new array as well as ex2
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// check if myRemove returns the right array
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);

// check check if myRemove not return the wrong array
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// check if the array passed as arg has not changed
const newArray = [10, 9, 8, 7];
myRemoveWithoutCopy(newArray, 8);
assert.deepStrictEqual(newArray, [10, 9, 7]);

// check if myRemove([1, 2, 3, 4], 5) return the right array
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);
