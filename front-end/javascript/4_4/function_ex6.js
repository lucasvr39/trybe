function sum(n) {
  let sumResult = n;

  for (let i = 0; i < n; i += 1) {
    sumResult += i;
  }
  return sumResult;
}

console.log(sum(5));
