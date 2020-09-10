const assert = require('assert');

const alunos = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const notas = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

// create new obj with student's averages - plantão Ícaro 21/08
const avgCalc = (grades) => {
  const gradesTotal = grades.reduce((acc, grade) => acc + grade);
  return gradesTotal / grades.length;
};

function studentAverage() {
  return alunos.map((aluno, index) => ({
    name: aluno,
    average: avgCalc(notas[index]),
  }));
}

console.log(studentAverage());

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepEqual(studentAverage(), expected);
