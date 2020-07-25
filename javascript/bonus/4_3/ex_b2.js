let n = 97;
let divisionModule = 0;
let isPrime = true;

for (let i = 2; i != n - 1; i += 1) {
  divisionModule = n % i;
  if (divisionModule === 0) {
    isPrime = false;
  }
}

if (isPrime === true) {
  console.log("It's a prime number!");
} else {
  console.log("It isn't a prime number!");
}