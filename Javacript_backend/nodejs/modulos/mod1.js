const nome = "Kamila";
const sobrenome = "Almeida";

const falaNome = () => nome + " " + sobrenome;

// console.log(module);
module.exports.nome = nome;
//exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.digaOla = "Oláááááá";
console.log("module.exports", module.exports);

class Pessoa {
  constructor(nome1, sobrenome1) {
    this.nome = nome1;
    this.sobrenome = sobrenome1;
  }
}

exports.Pessoa = Pessoa;
//exports = (x, y) => x + y;
// const letraA = "A";
// const letraB = "B";
// const letraC = "C";
// const letraD = "D";

// module.exports = {
//   letraA,
//   letraB,
//   letraC,
//   letraD,
// };

console.log(exports);
