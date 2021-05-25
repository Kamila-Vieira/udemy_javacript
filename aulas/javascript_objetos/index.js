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
