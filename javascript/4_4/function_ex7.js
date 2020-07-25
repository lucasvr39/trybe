
function checkEndingWord(word, ending) {
  var compareString = word[word.length - 2] + word[word.length - 1];

  if (compareString === ending) {
    return true;
  } else {
    return false;
  }
}

console.log(checkEndingWord("trybe", "be"));
