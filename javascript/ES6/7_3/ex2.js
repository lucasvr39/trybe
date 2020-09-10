const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// check if myRemove returns the right array
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);

// check check if myRemove not return the wrong array
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// check if the array passed as arg has not changed
const newArray = [4, 3, 2, 1];
myRemove(newArray, 3);
assert.deepStrictEqual(newArray, [4, 3, 2, 1]);

// check if myRemove([1, 2, 3, 4], 5) return the right array
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);
