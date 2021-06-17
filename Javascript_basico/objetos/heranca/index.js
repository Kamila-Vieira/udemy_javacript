//Herança

function Produto(nome, preço) {
  this.nome = nome;
  this.preco = preço;
}

Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

function Caneca(nome, preço, cor) {
  Produto.call(this, nome, preço);
  this.cor = cor;
}

Caneca.prototype = Object.create(Produto.prototype);

const produto = new Produto("Produto", 23);
const caneca = new Caneca("Caneca Verde", 23, "Verde");
caneca.aumento(50);

console.log(caneca);
Caneca.prototype.constructor = Caneca;
console.log(caneca);
console.log(produto);

Caneca.prototype.desconto = function (percentual) {
  this.preco -= this.preco * (percentual / 100);
};
Caneca.prototype.aumento = function (percentual) {
  this.preco += this.preco * (percentual / 100);
};

caneca.aumento(50);
console.log(caneca);

function Camiseta(nome, preço, material, estoque) {
  Produto.call(this, nome, preço);
  this.material = material;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: true,
    get: function () {
      return estoque;
    },
    set: function (valor) {
      if (typeof valor !== "number") return;
      estoque = valor;
    },
  });
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

const camiseta = new Camiseta("Camisa Santos", 54.8, "Algodão", 21);
camiseta.estoque = 23;

console.log(camiseta);
