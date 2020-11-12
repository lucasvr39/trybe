const n = 5;
let increment = '*';

for (let i = 1; i <= n; i += 1) {
  for (let j = n; j !== 1; j -= 1) {
    increment += '*';
  }
  console.log(increment);
  increment = '*';
}
