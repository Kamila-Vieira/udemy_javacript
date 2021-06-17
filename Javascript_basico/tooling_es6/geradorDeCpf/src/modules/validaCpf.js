export default class ValidaCpf {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      enumerable: true,
      writable: false,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, ""),
    });
  }

  valida() {
    if (!this.cpfLimpo) return false;
    if (typeof this.cpfLimpo !== "string") return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    this.cpfParcial = this.cpfLimpo.slice(0, -2);

    this.digito1 = ValidaCpf.criaDigito(this.cpfParcial);
    this.digito2 = ValidaCpf.criaDigito(this.cpfParcial + this.digito1);

    this.novoCpf = this.cpfParcial + this.digito1 + this.digito2;

    return this.novoCpf === this.cpfLimpo;
  }

  isSequencia() {
    this.sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return this.cpfLimpo === this.sequencia;
  }

  static criaDigito(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    this.total = cpfArray.reduce((acc, val) => {
      acc += Number(val) * regressivo;
      regressivo--;
      return acc;
    }, 0);
    this.digito = 11 - (this.total % 11);
    return this.digito > 9 ? "0" : String(this.digito);
  }
}

// const primeiroCpf = new ValidaCpf("872.407.380-76"); // Falso
// const segundoCpf = new ValidaCpf("160.791.740-81"); // Verdadeiro
// const terceiroCpf = new ValidaCpf("111.111.111-11"); // Falso
