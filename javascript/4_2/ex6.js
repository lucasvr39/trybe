let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddCount = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 != 0) {
    oddCount += 1;
  }
}

if (oddCount === 0) {
  console.log("no odd values found");
} else {
  console.log(oddCount);
}