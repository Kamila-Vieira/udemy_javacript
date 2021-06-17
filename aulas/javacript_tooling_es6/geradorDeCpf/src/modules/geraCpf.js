import ValidaCpf from "./validaCpf";

export default class GeraCpf {
  constructor() {}
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  formataCpf(cpf) {
    return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(
      6,
      9
    )}-${cpf.slice(9, 11)}`;
  }

  geraNovoCpf() {
    const cpfSemDigito = this.rand();
    const primeiroDigito = ValidaCpf.criaDigito(cpfSemDigito);
    const segundoDigito = ValidaCpf.criaDigito(cpfSemDigito + primeiroDigito);
    const cpfGerado = cpfSemDigito + primeiroDigito + segundoDigito;

    return this.formataCpf(cpfGerado);
  }
}
