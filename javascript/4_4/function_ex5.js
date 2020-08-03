function countFrequency(array) {
  let count = 0;
  let countNumber = 0;
  let indexNumber = 0;

  for (let i = 0; i < array.length; i += 1) {
    const checkNumber = array[i];
    for (let j = 0; j < array.length; j += 1) {
      if (checkNumber === array[j]) count += 1;
    }
    if (countNumber > count) {
      count = countNumber;
      indexNumber = i;
    }
    countNumber = 0;
  }
  return array[indexNumber];
}

console.log(countFrequency([2, 3, 2, 5, 8, 2, 3]));
