//872.707.380-76
//160.791.740-81

//1º => multiplica cada numero por um numero regressivo a partir do 10 e soma resultado
//2º => Calcula 11 - (resultadoPasso1 % 11) = primeiro dígito (se for 9 é igual a zero)
//3º => multiplica cada numero (Com o primeiro digito) por um numero regressivo a partir do 11 soma resultado
//2º => Calcula 11 - (resultadoPasso3 % 11) = segundo dígito (se for 9 é igual a zero)

// Minha função
// function ValidaCpf(cpf) {
//   this.cpf = cpf;
//   this.cpfLimpo = this.cpf.replace(/\D+/g, "");
//   this.cpfValidado = this.cpfLimpo.slice(0, -2);
//   this.isSequencia =
//     this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;

//   this.calculaValorRegressivo = (cpfAtual) => {
//     return cpfAtual
//       .split("")
//       .map(
//         (numero, indice) => (numero = numero * (cpfAtual.length + 1 - indice))
//       )
//       .reduce((acc, cur) => acc + cur, 0);
//   };

//   this.retornaDigito = (valor) => {
//     const digito = 11 - (valor % 11);
//     return digito > 9 ? 0 : digito;
//   };

//   this.calculaPrimeiroDigito = this.calculaValorRegressivo(this.cpfValidado);
//   this.primeiroDigito = this.retornaDigito(this.calculaPrimeiroDigito);

//   this.cpfValidado += this.primeiroDigito;

//   this.calculaSegundoDigito = this.calculaValorRegressivo(this.cpfValidado);
//   this.segundoDigito = this.retornaDigito(this.calculaSegundoDigito);

//   this.cpfValidado += this.segundoDigito;

//   this.valido =
//     this.cpfValidado === this.cpfLimpo &&
//     !this.isSequencia &&
//     typeof this.cpfLimpo !== "undefined" &&
//     this.cpfLimpo.length === 11;
// }

// Função da aula
function ValidaCpf(cpfEnviado) {
  Object.defineProperty(this, "cpfLimpo", {
    enumerable: true,
    get: function () {
      return cpfEnviado.replace(/\D+/g, "");
    },
  });
}

ValidaCpf.prototype.valida = function () {
  if (typeof this.cpfLimpo === "undefined") return false;
  if (this.cpfLimpo.length !== 11) return false;
  if (this.isSequencia()) return false;

  const cpfParcial = this.cpfLimpo.slice(0, -2);
  const digito1 = this.criaDigito(cpfParcial);
  const digito2 = this.criaDigito(cpfParcial + digito1);

  const novoCpf = cpfParcial + digito1 + digito2;

  return novoCpf === this.cpfLimpo;
};

ValidaCpf.prototype.criaDigito = function (cpfParcial) {
  const cpfArray = Array.from(cpfParcial);
  let regressivo = cpfArray.length + 1;
  const total = cpfArray.reduce((acc, val) => {
    acc += Number(val) * regressivo;
    regressivo--;
    return acc;
  }, 0);
  const digito = 11 - (total % 11);
  return digito > 9 ? "0" : String(digito);
};

ValidaCpf.prototype.isSequencia = function () {
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
  return this.cpfLimpo === sequencia;
};

const primeiroCpf = new ValidaCpf("872.407.380-76"); // Falso
const segundoCpf = new ValidaCpf("160.791.740-81"); // Verdadeiro
const terceiroCpf = new ValidaCpf("111.111.111-11"); // Falso

console.log(primeiroCpf);
console.log(segundoCpf);
console.log(terceiroCpf);
// console.log(primeiroCpf.valida());
// console.log(segundoCpf.valida());
// console.log(terceiroCpf.valida());
