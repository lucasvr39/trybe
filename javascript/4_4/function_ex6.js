var n = 5;

function sum(n) {
  var sumResult = n;

  for (i = 0; i < n; i += 1) {
    sumResult = sumResult + i;
  }
  return sumResult;
}

console.log(sum(n));
