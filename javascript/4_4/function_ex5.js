var array = [2, 3, 2, 5, 8, 2, 3];

function countFrequency(array) {
  var count = 0;

  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (array[i] === array[j])
        count += 1;
    }
  }
  return count;
}

console.log(countFrequency(array));
