function biggestName(nameArray) {
  let name = '';

  for (let index = 0; index < nameArray.length; index += 1) {
    if (nameArray[index].length > name.length) {
      name = nameArray[index];
    }
  }

  return name;
}

console.log(
  biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])
);
