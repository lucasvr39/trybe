const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

// count the total of a and A
function containsA() {
  const containsLetterA = (acc, name) =>
    acc + name.split('').filter((item) => item === 'a' || item === 'A').length;

  return names.reduce(containsLetterA, 0);
}

console.log(containsA());

assert.deepEqual(containsA(), 20);
