function highestArrayValue(array) {
  let highestValue = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > highestValue) {
      highestValue = array[index];
    }
  }

  return highestValue;
}

console.log(highestArrayValue([2, 3, 6, 7, 10, 1]));
