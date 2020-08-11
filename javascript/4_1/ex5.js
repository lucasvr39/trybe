const angleA = 90;
const angleB = 30;
const angleC = 60;

const sumAngles = angleA + angleB + angleC;

const tipo = typeof sumAngles;

switch (tipo) {
  case 'number':
    if (sumAngles === 180) {
      console.log(true);
    } else {
      console.log(false);
    }
    break;
  default:
    console.log('Error!');
    break;
}
