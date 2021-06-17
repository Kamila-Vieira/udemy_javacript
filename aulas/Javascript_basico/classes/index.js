class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.falar();
  }
  falar() {
    console.log(`${this.nome} está falando.`);
  }
  get nomeCompleto() {
    return this.nome + " " + this.sobrenome;
  }
  set nomeCompleto(valor) {
    valor = valor.split(" ");
    this.nome = valor.shift();
    this.sobrenome = valor.join(" ");
  }
}

function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

const pessoa1 = new Pessoa("kamila", "Almeida");

console.log(pessoa1);
console.log(pessoa1.nomeCompleto);
pessoa1.nomeCompleto = "Amanda Oliveira Ramos";
console.log(pessoa1);

//Getters e Setters
const _velocidade = Symbol("velocidade");
class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0;
  }
  acelerar() {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }
  freiar() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
  get velocidade() {
    return this[_velocidade];
  }
  set velocidade(valor) {
    if (typeof valor !== "number") return;
    if (valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor;
  }
}

const fusca = new Carro("Fusca");

console.log(fusca);

fusca.acelerar();
fusca.acelerar();

console.log(fusca);
console.log(fusca.velocidade);

fusca.velocidade = 99;
console.log(fusca);

fusca.velocidade = 100;
console.log(fusca);

//Herança

class Dispositivo {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(`${this.nome} já ligado`);
      return;
    }
    this.ligado = true;
  }
  desligar() {
    if (!this.ligado) {
      console.log(`${this.nome} já desligado`);
      return;
    }
    this.ligado = false;
  }
}

const iphone = new Dispositivo("Iphone");
iphone.ligar();
console.log(iphone);

class Smartphone extends Dispositivo {
  constructor(nome, cor, modelo) {
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
}

const samsung = new Smartphone("Samsung", "Preto", "Galaxy S10");

console.log(samsung);
console.log(iphone);

class Tablet extends Dispositivo {
  constructor(nome, temWifi) {
    super(nome);
    this.temWifi = temWifi;
  }
  ligar() {
    console.log("Método ligar alterado!");
  }
}

const table = new Tablet("Table", true);

console.log(table);

table.ligar();

console.log(table);

// Método estático

class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  aumentarVolume() {
    this.volume++;
  }
  diminuirVolume() {
    this.volume--;
  }

  static trocaPilha() {
    console.log("Trocando a pilha...");
    //Não possui acesso aos dados da instancia
    console.log("Volume", this.volume);
  }
}

const controle1 = new ControleRemoto("Samsung");

console.log(controle1);

controle1.aumentarVolume();

console.log(controle1);

ControleRemoto.trocaPilha();
