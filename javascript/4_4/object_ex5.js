var info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};

var infoDois = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

for (property in info) {
  for (propertyDois in infoDois) {
  }
  if (info[property] === "Sim" && infoDois[propertyDois] === "Sim") {
    console.log("Ambos recorrentes");
  } else {
    console.log(info[property] + " e " + infoDois[propertyDois]);
  }
}
