const n = 10;
let starIncrement = '*';
let spaceIncrement = '';

for (let i = n; i !== 0; i -= 1) {
  for (let j = 1; j !== i; j += 1) {
    spaceIncrement += ' ';
  }

  console.log(spaceIncrement + starIncrement);
  spaceIncrement = '';
  starIncrement += '*';
}
