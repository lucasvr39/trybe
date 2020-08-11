const grossSalary = 42558.84;
let inssTax = 0;
let irTax = 0;

if (grossSalary <= 1556.94) {
  inssTax = grossSalary * 0.08;
} else if (grossSalary >= 1556.95 && grossSalary <= 2594.92) {
  inssTax = grossSalary * 0.09;
} else if (grossSalary >= 2594.93 && grossSalary <= 5189.82) {
  inssTax = grossSalary * 0.11;
} else if (grossSalary > 4664.68) {
  inssTax = 570.88;
} else {
  console.log('Error!');
}

const baseSalary = grossSalary - inssTax;

if (baseSalary <= 1903.98) {
  irTax = 0;
} else if (baseSalary >= 1903.99 && baseSalary <= 2826.65) {
  irTax = baseSalary * 0.075 - 142.8;
} else if (baseSalary >= 2826.66 && baseSalary <= 3751.05) {
  irTax = baseSalary * 0.15 - 354.8;
} else if (baseSalary >= 3751.06 && baseSalary <= 4664.68) {
  irTax = baseSalary * 0.225 - 636.13;
} else if (baseSalary > 4664.68) {
  irTax = baseSalary * 0.275 - 869.36;
} else {
  console.log('Error!');
}

const netSalary = baseSalary - irTax;

console.log(`O seu salário líquido é R$${netSalary}`);
