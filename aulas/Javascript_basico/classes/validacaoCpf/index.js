//1º => multiplica cada numero por um numero regressivo a partir do 10 e soma resultado
//2º => Calcula 11 - (resultadoPasso1 % 11) = primeiro dígito (se for 9 é igual a zero)
//3º => multiplica cada numero (Com o primeiro digito) por um numero regressivo a partir do 11 soma resultado
//2º => Calcula 11 - (resultadoPasso3 % 11) = segundo dígito (se for 9 é igual a zero)

class ValidaCpf {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      enumerable: true,
      writable: false,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, ""),
    });
  }

  //Não pode ser estático porque utiliza this.cpfLimpo da instância
  //e porque terá um valor diferente em cada instancia
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

  //Não pode ser estático porque utiliza this.cpfLimpo da instância
  isSequencia() {
    this.sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return this.cpfLimpo === this.sequencia;
  }

  //Pode ser estático porque não utiliza nada da instância
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

// console.log(primeiroCpf);
// console.log(segundoCpf);
// console.log(terceiroCpf);
// console.log(primeiroCpf.valida()); // Falso
// console.log(segundoCpf.valida()); // Verdadeiro
// console.log(terceiroCpf.valida()); // Falso
