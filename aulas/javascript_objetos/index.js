const pessoas = [
  { nome: "Aparecida", idade: 43 },
  { nome: "Maria", idade: 34 },
  { nome: "José", idade: 53 },
  { nome: "Juliana", idade: 24 },
  { nome: "Kamila", idade: 21 },
  { nome: "Eliane", idade: 32 },
];

const pessoa1 = new Object();
pessoa1.nome = "Kamila";
pessoa1.sobrenome = "Almeida";
pessoa1.idade = 23;
pessoa1.getDataDeNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1);

for (const chave in pessoa1) {
  if (typeof pessoa1[chave] === "function") console.log(pessoa1[chave]());
  else console.log(pessoa1[chave]);
}

function criaPessoa() {
  return {
    nome: "Kamila",
    sobrenome: "Almeida",
    idade: 23,
    get dataDeNascimento() {
      const dataAtual = new Date();
      return dataAtual.getFullYear() - this.idade;
    },
  };
}

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
  this.nomeCompleto = () => {
    return `INTERNO: ${this.nome} ${this.sobrenome}`;
  };
  this.dataDeNascimento = () => {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
  };
  // Object.freeze(this); => Congela todas as instâncias
}

const p1 = new Pessoa("Kamila", "Almeida", 23);
Object.freeze(p1); // => Congela a instância p1
p1.idade = 43;
console.log("p1", p1);

const p2 = new Pessoa("Kamila", "Almeida", 23);
console.log("p2", p2);
p2.idade = 43;
p2.nome = "Patrícia";
console.log("p2", p2);

function Produto(nome, preco, estoque) {
  //this.nome = nome;
  //this.preco = preco;
  //this.estoque = estoque;

  // defineProperty e defineProperties

  Object.defineProperty(this, "estoque", {
    enumerable: true, // A chave é mostrada
    value: estoque, // O valor é mostrado (pode ser qualquer valor)
    writable: true, // O valor não pode ser alterado (o mesmo que free)
    configurable: false, // true: permite que as configurações acima sejam alteradas posteriormente || false: quando for falso não permite apagar a propriedade nem alterar as configurações
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: nome,
      writable: true,
      configurable: true,
    },

    // Getters e setters
    preco: {
      enumerable: true,
      configurable: true,
      // não pode ter value e writable
      get: function () {
        return preco;
      },
      set: function (valor) {
        if (typeof valor !== "number") {
          throw new TypeError("O preço precisa ser um número");
        }
        preco = valor;
      },
    },
  });
}

const produto1 = new Produto("Camisa", 23.8, 4);
produto1.estoque = 2;
produto1.preco = 21.5; // getter não permite que o valor seja alterado sem setter
//produto1.preco = "fwsaf";
delete produto1.estoque;
console.log("produto1: ", produto1.preco);

// Getters e setters factory function

function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      nome = valor;
    },
  };
}

const produto2 = criaProduto("Camiseta");
console.log(produto2.nome);
produto2.nome = "Sabonete";
console.log(produto2.nome);

//Métodos uteis

// Object.assign()
// Object.defineProperties()
// Object.defineProperty()
// Object.freeze() // congela o objeto
// Object.values() // array de valores
// Object.keys() // array de propriedades
// Object.entries() // arrays com chave e valor [chave, valor]
//Object.getOwnPropertyDescriptor()

const produto3 = new Produto("Sabão", 13.5, 14);

const detergente = {
  ...produto3, // spread
  material: "glicerina",
};
const sabao2 = Object.assign({}, produto3, { material: "glicerina" });

console.log(detergente);
detergente.nome = "Detergente";
console.log(detergente);
console.log(sabao2);

console.log("keys sabao2: ", Object.keys(sabao2));
console.log("values sabao2: ", Object.values(sabao2));
console.log("entries sabao2: ", Object.entries(sabao2));

// Pega as configurações do Object.defineProperty()
console.log(sabao2);
console.log(
  "getOwnPropertyDescriptor sabao2: ",
  Object.getOwnPropertyDescriptor(sabao2, "estoque")
);
Object.defineProperty(sabao2, "estoque", {
  writable: false,
  configurable: false,
  value: 34,
});
console.log(sabao2);
console.log(
  "getOwnPropertyDescriptor sabao2: ",
  Object.getOwnPropertyDescriptor(sabao2, "estoque")
);

for (const [chave, valor] of Object.entries(sabao2)) {
  console.log(chave, valor);
}

//Prototypes => molde do objeto (altera o objeto pai e consequentemente todas as sua instâncias)
const pessoa1Prototypes = new Pessoa("Kamila", "Almeida", 23);
Pessoa.prototype.nomeCompleto = () => {
  return `Prototype: ${this.nome} ${this.sobrenome}`;
};
const pessoa2Prototypes = new Pessoa("José", "Silva", 43);
console.log("pessoa1Prototypes", pessoa1Prototypes.nomeCompleto());
console.log("pessoa2Prototypes", pessoa2Prototypes.nomeCompleto());
// primeiro procura a função no molde proto, depois busca no objeto, por isso é o mostrado
// Seguindo a cadeia: Pessoa ==> Pessoa.prototype --> Object.prototype
