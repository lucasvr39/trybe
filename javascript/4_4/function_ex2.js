var array = [2, 3, 6, 7, 10, 1];

function highestArrayValue(array) {
  var highestValue = 0

  for (value in array) {
    if (array[value] > highestValue) {
      highestValue = array[value];
    }
  }

  return highestValue;
}

console.log(highestArrayValue(array));
