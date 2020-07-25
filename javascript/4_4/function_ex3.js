var array = [2, 3, 6, 7, 10, 1, -3];

function highestArrayValue(array) {
  var smallestValue = 0

  for (value in array) {
    if (array[value] < smallestValue) {
      smallestValue = array[value];
    }
  }

  return smallestValue;
}

console.log(highestArrayValue(array));
