var isPalindrome = "SAIPPUAKIVIKAUPPIAS";

function checkPalindrome(isPalindrome) {
  var invertPalindrome = "";

  for (let i = isPalindrome.length; i > 0; i -= 1) {
    invertPalindrome = invertPalindrome + isPalindrome[i - 1];
  }
  if (invertPalindrome === isPalindrome) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPalindrome(isPalindrome));
