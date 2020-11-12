function highestArrayValue(array) {
  let smallestValue = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < smallestValue) {
      smallestValue = array[index];
    }
  }

  return smallestValue;
}

console.log(highestArrayValue([2, 3, 6, 7, 10, 1, -3]));
