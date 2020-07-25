var names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function biggestName(nameArray) {
  var name = "";

  for (position in nameArray) {
    if (nameArray[position].length > name.length) {
      name = nameArray[position];
    }
  }

  return name;
}

console.log(biggestName(names));
