const assert = require('assert');

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

// print rectangle area using spread operators
for (rectangle of rectangles) {
  assert.equal(rectangleArea(...rectangle), rectangle[0] * rectangle[1]);
}

console.log(rectangleArea(...rectangle1));
console.log(rectangleArea(...rectangle2));
console.log(rectangleArea(...rectangle3));
