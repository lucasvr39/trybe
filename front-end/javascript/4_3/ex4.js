const n = 20;
let starIncrement = '*';
let spaceIncrement = '';

for (let i = n; i >= 1; i -= 2) {
  for (let j = 1; j <= i; j += 2) {
    spaceIncrement += ' ';
  }

  console.log(spaceIncrement + starIncrement);
  spaceIncrement = '';
  starIncrement += '**';
}
