/* Faça cinco programas, um para cada operação aritmética básica. 
Seu programa deve ter duas variáveis, a e b, definidas no começo com os valores que serão operados. 
Faça programas para:
    Adição
    Subtracão
    Multiplicação
    Divisão
    Módulo
   */

function sum(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

function module(a, b) {
  return a % b;
}

/* Faça um programa que retorne o maior de dois números. 
Defina no começo do programa duas variáveis com os valores que serão comparados */

function highest(a, b) {
  if (a > b) {
    return a;
  }
  if (b > a) {
    return b;
  }
  return 'iguais';
}

/* Faça um programa que retorne o maior de três números. 
Defina no começo do programa três variáveis com os valores que serão comparados. */

function highestPlus(a, b) {
  if (a > b && a > c) {
    return a;
  }
  if (b > a && b > c) {
    return b;
  }
  if (c > a && c > b) {
    return c;
  }
  return 'Há pelo menos dois números iguais';
}

// Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

function isPositive(a) {
  if (a > 0) {
    return 'positive';
  }
  return 'negative';
}

/* Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário. */

function isTriangle(angleA, angleB, angleC) {
  const sumAngles = angleA + angleB + angleC;
  const tipo = typeof sumAngles;

  if (tipo == 'number') {
    if (sumAngles === 180) {
      return true;
    }
    return false;
  }
  return 'Error!';
}

/* Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro. */

function howToChess(chessPiece) {
  const lowerCase = chessPiece.toLowerCase();
  let pieceMove = '';

  switch (lowerCase) {
    case 'pawn':
      pieceMove = 'moves forward only';
      break;
    case 'rook':
      pieceMove =
        'moves in a straight line either horizontally or vertically through any number of unoccupied squares';
      break;
    case 'knight':
      pieceMove =
        'moves two squares horizontally or vertically and then one more square at a right-angle';
      break;
    case 'bishop':
      pieceMove = 'moves in a straight line diagonally on the board';
      break;
    case 'queen':
      pieceMove =
        'move any number of squares in a straight line - either vertically, horizontally or diagonally';
      break;
    case 'king':
      pieceMove =
        'move one square in any direction: horizontally, vertically, or diagonally';
      break;
    default:
      pieceMove = 'invalid piece!';
  }
  return pieceMove;
}

/* Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. 
Siga essas regras:

Porcentagem >= 90 -> A

Porcentagem >= 80 -> B

Porcentagem >= 70 -> C

Porcentagem >= 60 -> D

Porcentagem >= 50 -> E

Porcentagem < 50 -> F

O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */

function schoolGrades(grade) {
  if (grade >= 90 && grade <= 100) {
    return 'A';
  }
  if (grade >= 80 && grade < 90) {
    return 'B';
  }
  if (grade >= 70 && grade < 80) {
    return 'C';
  }
  if (grade >= 60 && grade < 70) {
    return 'D';
  }
  if (grade >= 50 && grade < 60) {
    return 'E';
  }
  if (grade < 50 && grade > 0) {
    return 'F';
  }

  return 'Error!';
}

/* Escreva um programa que defina três números em variáveis no seu começo e retorne true se uma das três for par. 
Caso contrário, ele retorna false.
Bonus: use somente um if. */

function isEven(a, b, c) {
  if (a % 2 != 0 && b % 2 != 0 && c % 2 != 0) {
    return false;
  }
  return true;
}

/* Escreva um programa que defina três números em variáveis no seu começo e retorne true se uma das três for ímpar. 
Caso contrário, ele retorna false.
Bonus: use somente um if. */

function isOdd(a, b, c) {
  if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0) {
    return true;
  }
  return false;
}

/* Escreva um programa que se inicie com dois valores em duas variáveis diferentes: 
o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

Atente que, sobre o custo do produto, incide um imposto de 20%.

Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero. */

function netProfit(productUnitCost, productPrice, totalSales, taxes) {
  const productCost = productUnitCost * (taxes + 1);
  const totalCost = totalSales * productCost;
  const productRevenue = totalSales * productPrice;
  const netProfit = productRevenue - totalCost;

  if (productUnitCost < 0 || productPrice < 0) {
    return 'Error!';
  }
  return netProfit;
}

/* Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. 
Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido. */

function netSalary(grossSalary) {
  let inssTax = 0;
  let irTax = 0;
  let netSalary = 0;
  let baseSalary = 0;

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

  baseSalary = grossSalary - inssTax;

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

  netSalary = baseSalary - irTax;

  return netSalary;
}
