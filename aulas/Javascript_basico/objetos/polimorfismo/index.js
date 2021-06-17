function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    this.verSaldo();
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};
Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function () {
  console.log(`Ag/c: ${this.agencia}/${this.conta}`);
  console.log(`Saldo: R$${this.saldo.toFixed(2)}`);
};

const conta1 = new Conta(1001, 0001, 0);

console.log(conta1);

conta1.sacar(12);
conta1.depositar(1242);
console.log(conta1);
conta1.sacar(42);
console.log(conta1);

function CC(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function (valor) {
  if (valor > this.saldo) {
    if (valor - this.saldo <= this.limite) {
      this.saldo = 0;
      this.limite -= valor - this.saldo;
      console.log(
        `O valor R$${valor.toFixed(
          2
        )} foi sacado com sucesso! E seu limite foi para R$${this.limite.toFixed(
          2
        )}`
      );
    } else {
      console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`);
      return;
    }
  } else {
    this.saldo -= valor;
    console.log(`O valor R$${valor.toFixed(2)} foi sacado com sucesso!`);
    this.verSaldo();
  }
};

const conta2 = new CC(1021, 0002, 100, 2000);

console.log(conta2);
conta2.sacar(1233);
console.log(conta2);
conta2.depositar(23);
console.log(conta2);

function CP(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

CP.prototype = Object.create(CC.prototype);
CP.prototype.constructor = CP;

const conta3 = new CP(1011, 0003, 0);
console.log(conta3);

conta3.depositar(10);
conta3.sacar(10);
conta3.sacar(1);
