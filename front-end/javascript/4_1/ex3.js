const a = 10;
const b = 5;
const c = 50;

if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else if (c > a && c > b) {
  console.log(c);
} else {
  console.log('Há pelo menos dois números iguais');
}
