function checkPalindrome(isPalindrome) {
  let invertPalindrome = '';

  for (let i = isPalindrome.length; i > 0; i -= 1) {
    invertPalindrome += isPalindrome[i - 1];
  }
  if (invertPalindrome === isPalindrome) {
    return true;
  }
  return false;
}

console.log(checkPalindrome('SAIPPUAKIVIKAUPPIAS'));
