let angleA = 90;
let angleB = 30;
let angleC = 60;

let sumAngles = angleA + angleB + angleC;

let tipo = typeof sumAngles;

switch (tipo) {
  case 'number':
    if (sumAngles === 180) {
      console.log(true);
    } else {
      console.log(false);
    }
    break;
  default:
    console.log("Error!");
    break;
}