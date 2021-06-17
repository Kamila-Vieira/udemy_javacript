const nome = "Kamila";
const obj = { nome };
const novoObj = { ...obj, idade: 23 };
console.log(novoObj);

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

const kamila = new Pessoa("kamila", "Almeida");

console.log(kamila);
