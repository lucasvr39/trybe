function checkEndingWord(word, ending) {
  const compareString = word[word.length - 2] + word[word.length - 1];

  if (compareString === ending) {
    return true;
  }
  return false;
}

console.log(checkEndingWord('trybe', 'be'));
